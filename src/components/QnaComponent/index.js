import React from 'react'
import qna from '../../assets/images/qna.jpg'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const QnaComponent = () => {
    return (
        <div className="qna">
            <div className="qna_name">신용보증 QnA 고객들이 가장 자주하는 질문들</div>
            <aside className="qna_button">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary"><Link to ="/Qnaform">문의사항 작성하기</Link></Button>     
                </ButtonGroup>
            </aside>
            <img src={qna} className='qna_img' alt="qna_img"/>
        </div>
    )
}

export default QnaComponent
