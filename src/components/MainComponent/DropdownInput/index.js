import React from 'react'
import { Dropdown } from 'react-bootstrap'
import mag from "../../../assets/images/mag.png"
import Button from 'react-bootstrap/Button'
import RecommendComponent from '../../RecommendComponent'

const DropdownInput = () => {
    return (
        <div className= "searchbtn">
            <div className="dropbar">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                         개인별 맞춤 상품 검색
                    </Dropdown.Toggle>
                <div class = "container">
                <Dropdown.Menu id ="dropdown_data" className ="item">
                    <RecommendComponent/>
                </Dropdown.Menu>
                </div>
                </Dropdown>
            </div>
            <div className= "search_mag">
                <Button id = "magbtn" variant="link">
                <img src={mag} className = 'mag' alt="mag_img"/>
                </Button>
            </div>
        </div>
    )
}

export default DropdownInput
