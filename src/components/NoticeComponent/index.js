import React from 'react'
import { Link } from 'react-router-dom';


const NoticeComponent = () => {
    return (
        <div className="notice">
            <seaction className="seaction">
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>공지사항</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="t_num">1</th>
                            <td><a href="">신용보증제한기업소개</a></td>
                        </tr>
                        <tr>
                            <th >2</th>
                            <td><a href="">신용보증제한기업</a></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td><a href="">신용보증제한기업</a></td>
                        </tr>
                    </tbody>
                </table>
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
