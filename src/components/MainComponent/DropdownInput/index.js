import React from 'react'
import { Dropdown } from 'react-bootstrap'
import mag from "../../../assets/images/mag.png"

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

    )
}

export default DropdownInput
