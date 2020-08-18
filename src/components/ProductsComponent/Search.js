import React from 'react'
import mag from "../../assets/images/search.png"

import Button from 'react-bootstrap/Button'

const Search = () => {
    return (
        <div className= "search_mag product_btn">
            <a href="/compare" target="blank" 
            >
            <Button id = "magbtn" variant="link">
                <img src={mag} className = 'mag' alt="mag_img" width="100%" height="100%"/>
            </Button>
            </a>
        </div>
    )
}

export default Search