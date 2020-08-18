import React from 'react'
import { Dropdown } from 'react-bootstrap'
import mag from "../../../assets/images/search.png"
import Button from 'react-bootstrap/Button'
import RecommendComponent from '../../RecommendComponent'
import { Link } from 'react-router-dom'

const DropdownInput = () => {
    return (
        <div className= "searchbtn">
            <div className="dropbar">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{background:"#bed560", border:"1px solid #bed560"}}>
                         개인별 맞춤 상품 검색
                    </Dropdown.Toggle>
                <div className = "container">
                <Dropdown.Menu id ="dropdown_data" className ="item">
                    <RecommendComponent/>
                </Dropdown.Menu>
                </div>
                </Dropdown>
            </div>
            <div className= "search_mag">
                <Link to="/productsList">
                    <Button id = "magbtn" variant="link">
                        <img src={mag} className = 'mag' alt="mag_img" width="100%" height="100%"/>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default DropdownInput
