import React from 'react'

const ProductsComponent = () => {
    return (
        <div className="products_container">
            <h2>대출 상품 목록 조회</h2>

            <table className="products_table">
                <thead>
                        <tr>
                            <th> 비교검색 </th>
                            <th> 순번 </th>
                            <th> 정책명 </th>
                            <th> 자금유형 </th>
                            <th> 보증한도 </th>
                            <th> 보증기간 </th>
                            <th> 기업소재지 </th>
                            <th> 지원기관 </th>
                            <th> 이자율 </th>
                        </tr>
                        </thead>
                <tbody>
                        <tr>
                            <th></th>
                            <td>1</td>
                            <td>골목상권 해드림 특별보증</td>
                            <td>보증</td>
                            <td>3천만원 이내</td>
                            <td>10년 이내</td>
                            <td>제주</td>
                            <td>제주신용보증재단</td>
                            <td>연 0.8% (고정)</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>2</td>
                            <td>장애인기업 특례보증</td>
                            <td>보증</td>
                            <td>1억원 이내</td>
                            <td>7년 이내</td>
                            <td>제주</td>
                            <td>제주신용보증재단</td>
                            <td>연 0.7% 이내</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>3</td>
                            <td>사회적기업 전용 특별보증</td>
                            <td>보증</td>
                            <td>4억원 이내</td>
                            <td>5년 이내</td>
                            <td>제주</td>
                            <td>제주신용보증재단</td>
                            <td>연 0.5%</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>4</td>
                            <td>중소기업경영안정자금</td>
                            <td>보증</td>
                            <td>8억원 이내</td>
                            <td>2년</td>
                            <td>제주</td>
                            <td>제주신용보증재단</td>
                            <td>연 0.5%~2%</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>5</td>
                            <td>햇살론 보증</td>
                            <td>보증</td>
                            <td>3천만원 이내</td>
                            <td>5년(분할상환)</td>
                            <td>제주</td>
                            <td>제주신용보증재단</td>
                            <td>연 1% 이내</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>6</td>
                            <td>소상공인 자영업자 특별금융지원</td>
                            <td>보증</td>
                            <td>3천만원 이내</td>
                            <td>1년 이내</td>
                            <td>경기</td>
                            <td>경기신용보증재단</td>
                            <td>연 0.6% 고정</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>7</td>
                            <td>소상공인 초저금리 특별대출</td>
                            <td>보증</td>
                            <td>3천만원 이내</td>
                            <td>1년 이내</td>
                            <td>전국</td>
                            <td>IBK기업은행</td>
                            <td>연 0.6%</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>8</td>
                            <td>일반운전자금</td>
                            <td>보증</td>
                            <td>1억원 이내</td>
                            <td>1년 이내</td>
                            <td>전국</td>
                            <td>IBK기업은행</td>
                            <td>연 0.5%</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>9</td>
                            <td>예비창업자 사전보증</td>
                            <td>보증</td>
                            <td>1억원 이상</td>
                            <td>5년 이내</td>
                            <td>전국</td>
                            <td>기술보증기금</td>
                            <td>0.7%p 감면</td>
                        </tr>

                        <tr>
                            <th></th>
                            <td>10</td>
                            <td>일반보증</td>
                            <td>보증</td>
                            <td>8억원 이내</td>
                            <td>5년 이내</td>
                            <td>대전</td>
                            <td>대전신용보증재단</td>
                            <td>연 0.5%~2%</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>11</td>
                            <td>장애인기업 특례보증</td>
                            <td>보증</td>
                            <td>1억원 이내</td>
                            <td>7년 이내</td>
                            <td>대전</td>
                            <td>대전신용보증재단</td>
                            <td>연 0.7% (고정)</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>12</td>
                            <td>재도전지원 특례보증</td>
                            <td>보증</td>
                            <td>1억원 이내</td>
                            <td>5년 이내</td>
                            <td>대전</td>
                            <td>대전신용보증재단</td>
                            <td>연 2.0% (고정)</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>13</td>
                            <td>소상공인 자영업자 특별금융지원</td>
                            <td>보증</td>
                            <td>3천만원 이내</td>
                            <td>8년 이내</td>
                            <td>젼남</td>
                            <td>전남신용보증재단</td>
                            <td>연 0.6%</td>
                        </tr>



                    </tbody>
                </table>
        </div>
    )
}

export default ProductsComponent
