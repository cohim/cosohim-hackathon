import React from 'react'
import { Link } from 'react-router-dom'

const TableData = ({number, noticeName, noticeLink}) => {
    return (
        <tr>
            <th className="t_num">{number}</th>
            <td><Link to={noticeLink}>{noticeName}</Link></td>
        </tr>
    )
}

export default TableData
