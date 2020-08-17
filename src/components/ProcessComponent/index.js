import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import process1 from '../../assets/images/process1.jpg'
import process2 from '../../assets/images/process2.jpg'



const ProcessComponent = () => {
    return (
        <>
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" href="#process1">신용보증절차</Button>
                <Button variant="secondary" href="#process2">보증심사방법</Button>
                <Button variant="secondary" href="https://www.hometax.go.kr/">제출서류관련 링크</Button>
            </ButtonGroup>
        </div>
        <div className="process_article">
                    <div className="process_article_name"></div>
                    <br /><img src={process1} id="process1" alt="process1_jpg"/> <br />
                    <br /><img src={process2} id="process2" alt="process2_jpg"/>
        </div>
        </>
    )
}

export default ProcessComponent
