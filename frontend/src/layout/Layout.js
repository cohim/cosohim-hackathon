import React from 'react'
import Header from './Header'
// import Footer from './Footer'
import { Container } from 'react-bootstrap'
import MainBanner from '../components/MainComponent/MainBanner'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header />
                <MainBanner />
            <Container>
                {children}
            </Container>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout
