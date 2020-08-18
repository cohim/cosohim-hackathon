import React, { Component} from 'react'
import { InputGroup} from 'react-bootstrap'
import Search from "./Search"

// import productApi from "../../shared/db.json"
class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://192.168.22.37:8000/api/');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
    return (
    <div className="products_container">
        <h2 className="product_title">대출 상품 목록 조회</h2>
        <Search />
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
                {this.state.posts.map(item => (
                    <tr>
                        <td>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                            </InputGroup>

                        </td>
                        <td>
                            {item.idx}
                        </td>
                        <td>
                            {item.productName}
                        </td>
                        <td>
                            {item.guarantee}
                        </td>
                        <td>
                            {item.liog}
                        </td>
                        <td>
                            {item.termgrt}
                        </td>
                        <td>
                        {item.seat}
                        </td>
                        <td>
                        {item.date}
                        </td>
                        <td>
                        {item.interestRate}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
    }
}
export default App;