import React from 'react'
import { Dropdown } from 'react-bootstrap'
import mag from "../../../assets/images/mag.png"
<<<<<<< HEAD

const DropdownInput = () => {
    return (
        <div className = "dropbar">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                개인별 맞춤 상품 검색 
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
              <img src={mag} alt="search_img" width="100%" height="100%" className="mag" />
        </Dropdown>
        </div>

=======
import Button from 'react-bootstrap/Button'


const DropdownInput = () => {
    return (
        <div class = "searchbtn">
            <div className="dropbar">
                <Dropdown>
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
                <img src={mag} className = 'mag' alt="mag_img"/>
                </Button>{' '}
            </div>
        </div>
>>>>>>> 5536808e6a0809de757047e2ca45bafe695b3b63
    )
}

export default DropdownInput
