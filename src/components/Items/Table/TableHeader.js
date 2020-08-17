import React from 'react'

const TableHeader = ({tableHeaderName}) => {
    return (

        <thead>
            <tr>
                <th>번호</th>
                <th>{tableHeaderName}</th>
            </tr>
        </thead>
    )
}

export default TableHeader
