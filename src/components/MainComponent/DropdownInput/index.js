import React from 'react'
import { Dropdown } from 'react-bootstrap'
import search from "../../../assets/images/search.png"
import Button from 'react-bootstrap/Button'

// function searchbtn(){
//     var btn = document.querySelector('.magbtn');
//     if(onclick===true){
//         btn.style.display = 'block';
//     }
//     else{
//         btn.style.display = 'none';
//     }
// }

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
                <Button id = "search" variant="link">
                <img src={search} className = 'search' alt="search_img"/>
                </Button>{' '}
            </div>
        </div>
    )
}

export default DropdownInput
