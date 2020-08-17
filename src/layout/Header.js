import React from 'react'
import { Navbar, Nav, NavDropdown, Form} from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" style={{margin:0}}>
            <Navbar.Brand href="#home" img src="/2019/lib/image/img-gov-logo.png" alt="코힘">로고</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    
                <Nav className="mr-auto">
                <NavDropdown title="소개" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">재단 소개</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">CEO 소개</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">보증절차</Nav.Link>
                <Nav.Link href="#link">상품소개</Nav.Link>
                <NavDropdown title="공지사항" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">공지사항</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">보도자료</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="고객센터" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">자주 하는 질문</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">문의 작성</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">문의 답변</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
