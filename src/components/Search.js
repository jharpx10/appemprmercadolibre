import React from 'react'
import PropTypes from 'prop-types'

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
      <nav className="navbar navbar-dark bg-dark">


    <a class="navbar-brand" href="">
      <img src="" alt="" width="30" height="24"/>
    </a>
  
        <div className="d-flex">


        <input
          value={search}
          onChange={this.handleChange}
          className="form-control me-2"
          type="text"
        />
        <button className="btn btn-dark" onClick={() => handleSearch(search)}>Buscar</button>
        </div>
      </nav>
    )
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search