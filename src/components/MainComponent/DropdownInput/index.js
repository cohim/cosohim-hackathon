import React from 'react'
import { Dropdown } from 'react-bootstrap'
import mag from "../../../assets/images/search.png"
import Button from 'react-bootstrap/Button'

const DropdownInput = () => {
    return (
        <div class = "searchbtn">
            <div className="dropbar">
                <Dropdown onclik= "searchbtn()">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                         개인별 맞춤 상품 검색
                    </Dropdown.Toggle>
                <Dropdown.Menu id ="dropdown_data">
                    {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className= "search_mag">
                <Button id = "magbtn" variant="link">
                    <img src={mag} className = 'mag' alt="mag_img" width="100%" height="100%"/>
                </Button>
            </div>
        </div>
    )
}

export default DropdownInput
