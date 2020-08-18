import React from 'react'
import { Navbar, Nav, NavDropdown, Form} from 'react-bootstrap'
import logo from "../assets/images/logo.png"

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" style={{margin:0, fontSize:"1.5rem"}}>
            <Navbar.Brand href="/" ><img src = {logo} className="logo" alt ="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    
                <Nav className="mr-auto">
                <NavDropdown title="소개" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/foundation#foundation">재단 소개</NavDropdown.Item>
                    <NavDropdown.Item href="/foundation#ceo">CEO 소개</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/process">보증절차</Nav.Link>
                <Nav.Link href="/productsList">상품소개</Nav.Link>
                <NavDropdown title="공지사항" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/notice">공지사항</NavDropdown.Item>
                    <NavDropdown.Item href="/news">보도자료</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="고객센터" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/qna">자주 하는 질문</NavDropdown.Item>
                    <NavDropdown.Item href="/qnaform">문의 작성</NavDropdown.Item>
                    {/* <NavDropdown.Item href="#action/3.3">문의 답변</NavDropdown.Item> */}
                </NavDropdown>
                </Nav>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
