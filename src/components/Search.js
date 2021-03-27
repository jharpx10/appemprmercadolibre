import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = { search: '' }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render () {
    const { handleSearch } = this.props
    const { search } = this.state

    return (
      <div>
   
     
 <div class="d-flex translate-middle col-6 p-3 mx-auto">
  
      <Input 
       search={search}
       handleSearch={handleSearch}
       handleChange={this.handleChange} />
    <button className="btn btn-outline-dark ml-1" onClick={() => handleSearch(search)}>Buscar</button>
    </div>

    </div>
    )
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search