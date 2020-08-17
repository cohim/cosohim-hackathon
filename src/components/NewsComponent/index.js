import React from 'react'

const NewsComponent = () => {
    return (
            <div className="notice">
            <seaction className="seaction">
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>보도자료</th>
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
            <div className = "aside">
                    <ul>
                        <li><a href=""><p>공지사항</p></a></li>
                        <li><a href=""><p>보도자료</p></a></li>
                    </ul>
            </div>
        </div>
    )
}

export default NewsComponent
