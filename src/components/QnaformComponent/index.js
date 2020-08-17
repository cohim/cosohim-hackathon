import React from 'react'
import Form from 'react-bootstrap/Form'

const QnaformComponent = () => {
    return (
        <div className="qnaform">
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>답변을 받을 이메일 주소</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>문의사항</Form.Label>
                    <Form.Control as="textarea" rows="10" />
                </Form.Group>
            </Form>
            <footer>
            <hr/><h4>위의 양식에 맞춰 문의 사항을 남겨주세요. <br/><br/>문의하신 내용은 코힘 운영자에게 전달됩니다. </h4><br/><br/></footer>
        </div>
    )
}

export default QnaformComponent
