
import '../App.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";

function Page(props){

  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    // array자료.id == url에입력한번호
    return x.id == id
  });
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState('');
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState('');

  // 컴포넌트 갈고리(hook) 다는 법 => 컴포넌트의 lifecycle에 간섭
  // useEffect 안에 있는 코드는 html 렌더링 후에 동작. (컴포넌트 mount, update시 실행됨)
  // 시간이 오래 걸리는 연산, 서버에서 데이터 가져오는 작업, 타이머 장착 등 작업을 할 때 useEffect 함수 사용
  useEffect(()=>{
    let timer = setTimeout(()=>{ setAlert(false) }, 2000) 

    // useEffect 동작 전에 실행되는 함수(중복 발생할 수 있기 때문에 막기 위해서.)
    // 기존 함수 제거할 때 많이 사용
    return ()=>{
      clearTimeout(timer);
    }
  }, [count]) // [] 안에 useEffect 실행조건. mount(컴포넌트 로드)시에만 1회만 동작하게 하고 싶으면 [] 만 적어놓으면 됨.

  useEffect(()=>{
    if (isNaN(num) == true){
      alert('no')
    }
  })

  useEffect(()=>{
    setFade2('end')
    return()=>{
      setFade2('');
    }
  })

  return(
    <div className={`container start ${fade2}`}>

      {alert == true 
        ? <div className="alert alert-warning">
          2초이내 구매시 할인
        </div>
        : null
      }

      {count}
      <button onClick={()=> {setCount(count+1)}}>버튼</button>

      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (찾은상품.id+1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          {/* <h4 className="pt-5">{props.shoes[현재 url 입력한 파라미터 숫자].title}</h4> */}

          <input></input>

          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent shoes={props.shoes} tab={tab} />
    
    </div>
  )
}

// function TabContent(props){
//   if(props.tab == 0){
//     return <div>내용0</div>
//   } else if (props.tab  == 1) {
//     return <div>내용1</div>
//   } else if (props.tab  == 2) {
//     return <div>내용2</div>
//   }
// }
// 팁1. 축약
function TabContent({tab}){
  let [fade, setFade] = useState('');

  useEffect(()=>{
    let timer = setTimeout(()=>{ setFade('end') }, 100)
    return()=>{
      clearTimeout(timer)
      setFade('')
    }
  }, [tab])

  // if(tab == 0){
  //   return <div>내용0</div>
  // } else if (tab  == 1) {
  //   return <div>내용1</div>
  // } else if (tab  == 2) {
  //   return <div>내용2</div>
  // }
  // 팁2. 배열 이용
  return (<div className={`start ${fade}`}>
    { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
  </div>)
}

// 1. 재렌더링마다 코드실행하고 싶으면
// useEffect(()=>{ 코드 작성 })

// 2. 컴포넌트 로드시(mount) 1회 코드 실행하고 싶으면
// useEffect(()=>{ 코드 작성 }, [])

// 3. 컴포넌트가 삭제될 때(unmount) 1회 코드 실행하고 싶으면
// useEffect(()=>{
//   return()=>{
//     코드 작성
//   }
// }, [])

// 4. useEffect 실행 전에 뭔가 실행하려면 언제나 useEffect 안에 return()=>{}
// 5. 특정 state 변경시에만 실행하려면 [state명]
export default Page;