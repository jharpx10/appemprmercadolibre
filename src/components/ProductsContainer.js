import React from 'react'
import Product from './Product'
import Search from './Search'
import { getProductsBySearch, getProductsByPagination, getFirstProducts } from '../services/productServices'
import Grid from '@material-ui/core/Grid';
import ReactPaginate from 'react-paginate'


class ProductsCointainer extends React.Component {




    constructor(props) {
        super(props)

        this.state = {
            search: "",
            products: [],
            pageCount: 0,
            isFetch: true,
        }
        this.start()
    }


    start = async () => {
        const responseJson = await getFirstProducts();
        this.setState({ products: responseJson.results, isFetch: false, pageCount: responseJson.pageCount, search: responseJson.search })
    }

    handleSearch = async (search) => {

        const responseJson = await getProductsBySearch(search)
        this.setState({ products: responseJson.results, isFetch: false, search: search, pageCount: responseJson.pageCount })

    }

    handlePagination = async (selectedPage) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const page = selectedPage.selected;
        const responseJSon = await getProductsByPagination(page, this.state.search)
        this.setState({ products: responseJSon.results, isFetch: false });

    }



    render() {
        const { isFetch, products, pageCount } = this.state

        return (
            <div>
                
                <Search handleSearch={this.handleSearch} />

                {
                    isFetch && 'Cargando...'
                }

                {
                    (!isFetch && !products.length) && 'No se encontraron productos, intenta otra búsqueda'
                }


                <Grid container spacing={0} xs={10} className={"mx-auto"} >
                    {

                      
                            products.map((product) =>
                            <Grid item xs={4}>

                                <Product
                                    imageUrl={product.thumbnail}
                                    name={product.title}
                                    price={product.price}
                                    sellerNickame={product.sellerNickname}
                                    id={product.id}
                                />
                               
                            </Grid>)


                    }

                </Grid>
                <br />
                {products.length&&
                <ReactPaginate

                    previousLabel={"Anterior"}
                    nextLabel={"Siguiente"}
                    pageCount={pageCount}
                    containerClassName={"btn-group paginationBttns"}
                    previousLinkClassName={"btn btn-dark"}
                    nextLinkClassName={"btn btn-dark"}
                    pageLinkClassName={"btn btn-outline-secondary"}
                    activeLinkClassName={"btn btn-dark"}
                    onPageChange={this.handlePagination}
                />}
            </div>

        )
    }
}



export default ProductsCointainer;

