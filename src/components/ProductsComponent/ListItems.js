import React from 'react'

const ListItems = ({idx,
    productName,
    guarantee,
    liog,
    termgrt,
    seat,
    date,
    interestRate}) => {
    return (
        <tr>
            <td>체크박스</td>
            <td>{idx}</td>
            <td>{productName}</td> {/* 정책명 */}
            <td>{guarantee}</td>{/* 보증 */}
            <td>{liog}</td>{/* 보증한도 */}
            <td>{termgrt}</td>{/* 보증기간 */}
            <td>{seat}</td>{/* 기업소재지 */}
            <td>{date}</td>{/* 지원기간 */}
            <td>{interestRate}</td>{/* 이자율 */}
        </tr>
    )
}

export default ListItems


