import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'



const ProcessComponent = () => {
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">보증절차1</Button>
                <Button variant="secondary">보증절차2</Button>
            </ButtonGroup>
        </div>
    )
}

export default ProcessComponent
