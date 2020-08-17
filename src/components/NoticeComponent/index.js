import React from 'react'
import { Link } from 'react-router-dom';
import Table from '../Items/Table';
import TableData from '../Items/Table/TableData';


const NoticeComponent = () => {
    return (
        <div className="notice">
            <seaction className="seaction">
                <Table
                tableHeaderName="공지사항"
                >
                    <TableData number="1" noticeName="신용보증제한기업소개" noticeLink="#" />
                </Table>
            </seaction>
            <aside className = "aside">
                    <ul>
                        <li><h4>공지사항</h4></li>
                        <li><Link to='/notice'><p>공지사항</p></Link></li>
                        <li><Link to="/news"><p>보도자료</p></Link></li>
                    </ul>
            </aside>
        </div>
    )
}

export default NoticeComponent
