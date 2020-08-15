import React from 'react'

import arrow from "../../../assets/images/arrow.png";
import mag from "../../../assets/images/mag.png";

const DropdownInput = () => {

    const folder = () => {

        var target = document.querySelector('#data');
        var bicon = document.querySelector('#btni');
        var magni = document.querySelector('#bmag');

      if(this.value==='내용접기'){
        target.style.display = 'block';
        magni.style.display='block';
        bicon.style.transform = 'rotate(180deg)';
        this.value = '내용펼치기';
      }
      else{
        target.style.display ='none';
        magni.style.display='none';
        bicon.style.transform = 'rotate(360deg)';
        this.value = '내용접기';
      }

    }

    return (
        <div className="search_dropdown_bar_container">
          <div>
            <section>
              <div className= "searchbutton">
                <input className="search" type="text" placeholder="맞춤형 상품검색 " />
                <button type="button" className= "btn" value="내용접기" onClick={folder}>
                <img id= "btni" src={arrow}alt="" /></button>
                <button id= "bmag" type="button" value="확대">
                    <img className= "mag" src={mag} alt="" />

                    </button>
              </div>
              <br /><br />
              <p id="data"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </div>
        </div>
    )
}

export default DropdownInput
