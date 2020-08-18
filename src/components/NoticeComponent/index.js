import React from 'react'
import { Link } from 'react-router-dom';
import Table from '../Items/Table';
import TableData from '../Items/Table/TableData';


const NoticeComponent = () => {
    return (
        <div className="notice">
            <aside className = "aside">
                <ul>
                    <li><h4>공지사항</h4></li><hr/>
                    <li><Link to="/notice">공지사항</Link></li>
                    <br/>
                    <li><Link to ="/news">보도자료</Link></li>
                </ul>
            </aside>
            <section className="section">
                <Table tableHeaderName="공지사항">
                    <TableData number="1" noticeName="신용보증제한기업소개" noticeLink="#" />
                    <TableData number="2" noticeName="신용보증제한기업소개" noticeLink="#" />
                    <TableData number="3" noticeName="신용보증제한기업소개" noticeLink="#" />
                    <TableData number="4" noticeName="신용보증제한기업소개" noticeLink="#" />
                    <TableData number="5" noticeName="신용보증제한기업소개" noticeLink="#" />
                    <TableData number="6" noticeName="신용보증제한기업소개" noticeLink="#" />
                    <TableData number="7" noticeName="신용보증제한기업소개" noticeLink="#" />
                </Table>
            </section>
        </div>
    )
}

export default NoticeComponent
