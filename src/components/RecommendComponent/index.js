import React from 'react'
import { InputGroup} from 'react-bootstrap'

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
                <option value="asd" >전체</option> 
                <option value="asd">중소기업</option> 
                <option value="asd">소상공인</option> 
                <option value="asd">1인기업</option> 
                <option value="asd">창업기업</option> 
                <option value="asd">예비창업자</option> 
                <option value="asd">기타</option> 
            </select>

          </InputGroup>
          </td>
        <td>
          <InputGroup>
          <span>기업 소재지</span>
              <select> 
                <option value="asd" >전체</option> 
                <option value="asd">서울특별시</option> 
                <option value="asd">부산광역시</option> 
                <option value="asd">대구광역시</option> 
                <option value="asd">인천광역시</option> 
                <option value="asd">광주광역시</option> 
                <option value="asd">대전광역시</option> 
                <option value="asd">울산광역시</option> 
                <option value="asd">세종특별자치시</option> 
                <option value="asd">경기도</option> 
                <option value="asd">강원도</option> 
                <option value="asd">충청북도</option> 
                <option value="asd">충청남도</option> 
                <option value="asd">전라북도</option> 
                <option value="asd">전라남도</option> 
                <option value="asd">경상북도</option> 
                <option value="asd">경상남도</option> 
                <option value="asd">제주특별자치도</option> 
            </select>

          </InputGroup>
          </td></tr>
            <tr>
              <td>
          <InputGroup>
          <span>영업기간</span>
              <select> 
                <option value="asd" >전체</option> 
                <option value="asd">3년미만</option> 
                <option value="asd">3년이상~5년미만</option> 
                <option value="asd">5년이상~7년미만</option> 
                <option value="asd">7년이상~10년미만</option> 
                <option value="asd">10년이상~20년미만</option> 
            </select>

          </InputGroup>
          </td>
              <td>
          <InputGroup>
             <span>매출액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <select> 
                <option value="asd" >전체</option> 
                <option value="asd">5억미만</option> 
                <option value="asd">5억이상~10억미만</option> 
                <option value="asd">10억이상~20억미만</option> 
                <option value="asd">20억이상~50억미만</option> 
                <option value="asd">50억이상~100억미만</option> 
                <option value="asd">100억이상~300억미만</option> 
                <option value="asd">300억이상</option> 
            </select>

          </InputGroup>
          </td></tr>

          <tr ><td colSpan="2">
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
