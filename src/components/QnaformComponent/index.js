import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const QnaformComponent = () => {
    return (
        <div className="qnaform">
            <header>
                <h4>위의 양식에 맞춰 문의 사항을 남겨주세요. <br/><br/>문의하신 내용은 코힘 운영자에게 전달됩니다. </h4><hr/><br/><br/></header>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>답변을 받을 이메일 주소</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                    <br/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="qnabtn">
                    <Form.Label>문의사항</Form.Label>
                    <Form.Control as="textarea" rows="10" />
                    <br/>
                </Form.Group>
            </Form>
            <div className="qnaformbtn">
                <Button as="input" type="submit" value="Submit" style={{background :"#000000", fontSize: "1.5rem", marginLeft:500}}/>
                <Button as="input" type="reset" value=" Reset " style={{background :"#000000", fontSize: "1.5rem", marginLeft:10}} />
            </div>
        </div>
        )
}

export default QnaformComponent
