import React from 'react'
import { Link } from 'react-router-dom'
import Table from '../Items/Table';
import TableData from '../Items/Table/TableData';

const NewsComponent = () => {
    return (
            <div className="notice">
                <aside className = "aside">
                    <ul>
                        <li><h4>보도자료</h4></li>
                        <li><Link to="/notice"><p>공지사항</p></Link></li>
                        <li><Link to ="/news"><p>보도자료</p></Link></li>
                    </ul>
                </aside>
            <seaction className="seaction">
            <Table tableHeaderName="보도자료">
                    <TableData number="1" noticeName="2020년 신용보증제도 이슈" noticeLink="#" />
                    <TableData number="2" noticeName="2020년 신용보증제도 이슈" noticeLink="#" />
                    <TableData number="3" noticeName="2020년 신용보증제도 이슈" noticeLink="#" />
                    <TableData number="4" noticeName="2020년 신용보증제도 이슈" noticeLink="#" />
                    <TableData number="5" noticeName="2020년 신용보증제도 이슈" noticeLink="#" />
                    <TableData number="6" noticeName="2020년 신용보증제도 이슈" noticeLink="#" />
                    <TableData number="7" noticeName="2020년 신용보증제도 이슈" noticeLink="#" />
                </Table>
            </seaction>
        </div>
    )
}

export default NewsComponent
