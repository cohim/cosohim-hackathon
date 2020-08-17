import React from 'react'
import { InputGroup, DropdownButton, Dropdown } from 'react-bootstrap'

const RecommendComponent = () => {
    return (
      <div className="RecommendComponent_container">
<table className="recommendtable">
      <tr>
        <td>
          <InputGroup>
          <span>기업규모</span>


              <DropdownButton as={InputGroup.Append} variant="outline-secondary" title="Dropdown" id="input-group-dropdown-2">
                  <Dropdown.Item href="#">전체</Dropdown.Item>
                  <Dropdown.Item href="#">중소기업</Dropdown.Item>
                  <Dropdown.Item href="#">소상공인</Dropdown.Item>
                  <Dropdown.Item href="#">1인기업</Dropdown.Item>
                  <Dropdown.Item href="#">창업기업</Dropdown.Item>
                  <Dropdown.Item href="#">예비창업자</Dropdown.Item>
                  <Dropdown.Item href="#">기타</Dropdown.Item>
                  <Dropdown.Divider />

              </DropdownButton>

          </InputGroup>
          </td>
        <td>
          <InputGroup>
          <span>기업 소재지</span>

              <DropdownButton as={InputGroup.Append} variant="outline-secondary" title="Dropdown" id="input-group-dropdown-2">
                  <Dropdown.Item href="#">전체</Dropdown.Item>
                  <Dropdown.Item href="#">서울특별시</Dropdown.Item>
                  <Dropdown.Item href="#">부산광역시</Dropdown.Item>
                  <Dropdown.Item href="#">대구광역시</Dropdown.Item>
                  <Dropdown.Item href="#">인천광역시</Dropdown.Item>
                  <Dropdown.Item href="#">광주광역시</Dropdown.Item>
                  <Dropdown.Item href="#">대전광역시</Dropdown.Item>
                  <Dropdown.Item href="#">울산광역시</Dropdown.Item>
                  <Dropdown.Item href="#">세종특별자치시</Dropdown.Item>
                  <Dropdown.Item href="#">경기도</Dropdown.Item>
                  <Dropdown.Item href="#">강원도</Dropdown.Item>
                  <Dropdown.Item href="#">충청북도</Dropdown.Item>
                  <Dropdown.Item href="#">충청남도</Dropdown.Item>
                  <Dropdown.Item href="#">전라북도</Dropdown.Item>
                  <Dropdown.Item href="#">전라남도</Dropdown.Item>
                  <Dropdown.Item href="#">경상북도</Dropdown.Item>
                  <Dropdown.Item href="#">경상남도</Dropdown.Item>
                  <Dropdown.Item href="#">제주특별자치도</Dropdown.Item>
                  <Dropdown.Divider />

              </DropdownButton>

          </InputGroup>
          </td></tr>
            <tr>
              <td>
          <InputGroup>
          <span>영업기간</span>

              <DropdownButton as={InputGroup.Append} variant="outline-secondary" title="Dropdown" id="input-group-dropdown-2">
                  <Dropdown.Item href="#">전체</Dropdown.Item>
                  <Dropdown.Item href="#">3년미만</Dropdown.Item>
                  <Dropdown.Item href="#">3년이상~5년미만</Dropdown.Item>
                  <Dropdown.Item href="#">5년이상~7년미만</Dropdown.Item>
                  <Dropdown.Item href="#">7년이상~10년미만</Dropdown.Item>
                  <Dropdown.Item href="#">10년이상~20년미만</Dropdown.Item>
                  <Dropdown.Divider />

              </DropdownButton>

          </InputGroup>
          </td>
              <td>
          <InputGroup>
             <span>매출액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>


              <DropdownButton as={InputGroup.Append} variant="outline-secondary" title="Dropdown" id="input-group-dropdown-2">
                  <Dropdown.Item href="#">전체</Dropdown.Item>
                  <Dropdown.Item href="#">5억미만</Dropdown.Item>
                  <Dropdown.Item href="#">5억이상~10억미만</Dropdown.Item>
                  <Dropdown.Item href="#">10억이상~20억미만</Dropdown.Item>
                  <Dropdown.Item href="#">20억이상~50억미만</Dropdown.Item>
                  <Dropdown.Item href="#">50억이상~100억미만</Dropdown.Item>
                  <Dropdown.Item href="#">100억이상~300억미만</Dropdown.Item>
                  <Dropdown.Item href="#">300억이상</Dropdown.Item>
                  <Dropdown.Divider />

              </DropdownButton>

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
      </td></tr>
  </table></div>
 
)
}

export default RecommendComponent
