import React from 'react'
import TableHeader from './TableHeader'
import TableData from './TableData'

const Table = ({tableHeaderName,number, noticeName,noticeLink,children}) => {
    return (
        <table>
            <TableHeader tableHeaderName={tableHeaderName}  />
            <tbody>
                {children}
                <TableData number={number} noticeName={noticeName} noticeLink={noticeLink} />
            </tbody>
        </table>
    )
}

export default Table
