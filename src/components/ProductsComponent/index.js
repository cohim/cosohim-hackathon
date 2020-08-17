import React from 'react'
// import React, { useState, useEffect } from 'react'
import ListItems from './ListItems'
// import {productListApi} from '../../shared/Api'
// import { Spinner } from 'react-bootstrap';

// import productApi from "../../shared/db.json"

const ProductsComponent = () => {
    // const [list, setList] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
  
    // useEffect(() => {
    //   async function fetchProductList() {
    //     setIsLoading(true);
    //     try {
    //       const result = await productListApi.get("/");
    //       setList(result.data);
    //       console.log(result);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     setIsLoading(false);
    //   }
    //   fetchProductList();
    // }, []);
    return (
        <div className="products_container">
            <h2>대출 상품 목록 조회</h2>
        {/* {isLoading && <Spinner animation="border" variant="success" />} */}
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
                        <ListItems
                        idx="1"
                        productName="골목상권 해드림 특별보증"
                        guarantee="보증"
                        liog="3천만원 이내"
                        termgrt="10년 이내"
                        seat="제주"
                        date="제주신용보증재단"
                        interestRate="연 0.8%" />
                </tbody>
            </table>
        </div>
    )
}

export default ProductsComponent
