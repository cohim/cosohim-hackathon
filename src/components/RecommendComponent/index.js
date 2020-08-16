import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

const RecommendComponent = () => {
    return (
        <div>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>
     <span>융자</span>
  </InputGroup>
</div>
        
        )
}

export default RecommendComponent
