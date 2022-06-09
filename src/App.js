import logo from './logo.svg';
import './App.css';
//컴포넌트 쓰기 위해서는 import 해놔야 함
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';
import { createContext, useState } from 'react';
// import 작명 from './data.js';
// import {a, b} from './data.js';
import data from './data.js';
import Page from './routes/Page.js';
import {Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'
import Cart from './routes/Cart.js';

export let Context1 = createContext(); //state 보관함

function App() {
  let [shoes, setShose] = useState(data);
  let navigate = useNavigate(); //페이지 이동을 도와주는 함수
  let [재고] = useState([10, 11, 12])

  return (
    <div className="App">

      {/* {a} import한 변수 */}
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail/0') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event') }}>Event</Nav.Link>
          </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={
            // {/* html 파일에선 import부터 하고 필요한 곳에서 사용 */}
            // {/* <div className="main-bg" style={{backgroundImage: 'url('+ bg +')'}}></div> */}
            <>
              <div className="main-bg"></div>
          
              {/* <List shoes={shoes}></List> */}
              <div className="shoes-list">
                {shoes.map((a, i)=>{
                  return(
                    <Card shoes={shoes[i]} i={i} key={i}></Card>
                  )
                })}
              </div>

              {/* 데이터 요청 */}
              <button onClick={()=>{
                // 로딩중 띄우기
                axios.get('https://codingapple1.github.io/shop/data2.json').then(( result )=>{ 
                  console.log(result.data)
                  let copy = [...shoes, ...result.data]; //shoes에 가져온 데이터 추가
                  setShose(copy);
                  // 로딩중 숨기기
                })
                // {/* ajax 요청 실패할 경우 */}
                .catch(()=>{
                  // 로딩중 숨기기
                  console.log('실패하는 경우')
                })
              }}>더보기</button>
            </>
          } />

          {/* url 파라미터 문법 */}
          <Route path="/detail/:id" element={
            // <Context1.Provider value={{ 재고, shoes }}>
            //   <Page shoes={shoes}/>
            // </Context1.Provider>
              <Page shoes={shoes}/>
          } />

          <Route path="/cart" element={ <Cart /> }></Route>
          
          <Route path="/about" element={<About></About>} >
            {/* Nested Route 문법 */}
            <Route path="member" element={<div>멤버임</div>} />
            <Route path="location" element={<div>위치정보임</div>} />
          </Route>

          <Route path="/event" element={<Event/>}>
            <Route path="one" element={<div>첫주문시</div>}></Route>
            <Route path="two" element={<div>생일기념쿠폰받기</div>}></Route>
          </Route>

          <Route path="*" element={<div>없는 페이지입니다.</div>} />
        </Routes>
    </div>
  );
}

//컴포넌트
function Card(props){
  return(
    <div className="item">
      <img src= {'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>상품설명: {props.shoes.content}</p>
      <p>가격: {props.shoes.price} 원</p>
    </div>
  )
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
