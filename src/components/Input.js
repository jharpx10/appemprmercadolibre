import React from 'react'
import PropTypes from 'prop-types'
class Input extends React.Component {
    _handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        this.props.handleSearch(this.props.search)
        
      }
      

    }
    
  
    render() {
        const { search,handleChange,handleSearch} = this.props
      return <input id="search" 
      
      className={"form-control me-2 " } 
       type="search" placeholder="" aria-label="Search"
       value={search}
       handleSearch={handleSearch}
       onKeyDown={this._handleKeyDown}
      onChange={handleChange} />
    }
  }

  Input.propTypes = {
    search: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
  }
  export default Input;