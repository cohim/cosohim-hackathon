import React from 'react'
import { InputGroup, DropdownButton, Dropdown } from 'react-bootstrap'

const RecommendComponent = () => {
    return (
      <div className="RecommendComponent_container">
<table className="recommendtable">
    <thead></thead>
    <tbody>
      <tr>
        <td>
          <InputGroup>
          <span>기업규모</span>
              <select> 
                <option selected>전체</option> 
                <option>중소기업</option> 
                <option>소상공인</option> 
                <option>1인기업</option> 
                <option>창업기업</option> 
                <option>예비창업자</option> 
                <option>기타</option> 
            </select>

          </InputGroup>
          </td>
        <td>
          <InputGroup>
          <span>기업 소재지</span>
              <select> 
                <option selected>전체</option> 
                <option>서울특별시</option> 
                <option>부산광역시</option> 
                <option>대구광역시</option> 
                <option>인천광역시</option> 
                <option>광주광역시</option> 
                <option>대전광역시</option> 
                <option>울산광역시</option> 
                <option>세종특별자치시</option> 
                <option>경기도</option> 
                <option>강원도</option> 
                <option>충청북도</option> 
                <option>충청남도</option> 
                <option>전라북도</option> 
                <option>전라남도</option> 
                <option>경상북도</option> 
                <option>경상남도</option> 
                <option>제주특별자치도</option> 
            </select>

          </InputGroup>
          </td></tr>
            <tr>
              <td>
          <InputGroup>
          <span>영업기간</span>
              <select> 
                <option selected>전체</option> 
                <option>3년미만</option> 
                <option>3년이상~5년미만</option> 
                <option>5년이상~7년미만</option> 
                <option>7년이상~10년미만</option> 
                <option>10년이상~20년미만</option> 
            </select>

          </InputGroup>
          </td>
              <td>
          <InputGroup>
             <span>매출액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <select> 
                <option selected>전체</option> 
                <option>5억미만</option> 
                <option>5억이상~10억미만</option> 
                <option>10억이상~20억미만</option> 
                <option>20억이상~50억미만</option> 
                <option>50억이상~100억미만</option> 
                <option>100억이상~300억미만</option> 
                <option>300억이상</option> 
            </select>

          </InputGroup>
          </td></tr>

          <tr ><td colspan="2">
              <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                  <span>자금유형</span>
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup.Prepend>
                  <span>전체</span>
                  <InputGroup.Prepend>
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup.Prepend>
                  <span>융자</span>
                  <InputGroup.Prepend>
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup.Prepend>
                  <span>보증</span>
                  <InputGroup.Prepend>
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup.Prepend>
                  <span>보험</span>
              </InputGroup>
      </td></tr></tbody>
      <tfoot></tfoot>
  </table></div>
 
)
}

export default RecommendComponent
