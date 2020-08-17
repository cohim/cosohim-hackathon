import React from 'react'
import { InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'

const RecommendComponent = () => {
    return (
<>
<InputGroup className="mb-3">
  <DropdownButton
  as={InputGroup.Prepend}
  variant="outline-secondary"
  title="Dropdown"
  id="input-group-dropdown-1"
  >
  <Dropdown.Item href="#">Action</Dropdown.Item>
  <Dropdown.Item href="#">Another action</Dropdown.Item>
  <Dropdown.Item href="#">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#">Separated link</Dropdown.Item>
  </DropdownButton>
  <FormControl aria-describedby="basic-addon1" />
</InputGroup>

<InputGroup>
  <FormControl
  placeholder="Recipient's username"
  aria-label="Recipient's username"
  aria-describedby="basic-addon2"
  />

  <DropdownButton
  as={InputGroup.Append}
  variant="outline-secondary"
  title="Dropdown"
  id="input-group-dropdown-2"
  >
  <Dropdown.Item href="#">Action</Dropdown.Item>
  <Dropdown.Item href="#">Another action</Dropdown.Item>
  <Dropdown.Item href="#">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#">Separated link</Dropdown.Item>
  </DropdownButton>
</InputGroup>
<div>
  <InputGroup className="mb-3">
  <InputGroup.Prepend>
  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
  </InputGroup.Prepend>
  <span>융자</span>
  </InputGroup>
</div>
</>
        
        )
}

export default RecommendComponent
