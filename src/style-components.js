import { useParams } from "react-router-dom";
import styled from 'styled-components'

let YellowBtn = styled.button`
  background: ${ props => props.bg };
  color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding: 10px;
  border:1px solid #000;
`
// let NewBtn = styled.button(YellowBtn)`내용`

let Box = styled.div`
  background: grey;
  padding: 20px;
`

function Page(props){
  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    // array자료.id == url에입력한번호
    return x.id == id
  });

  return(
    <div className="container">
      <Box>
        <YellowBtn bg="blue">Button</YellowBtn>
        <YellowBtn bg="orange">Button</YellowBtn>
      </Box>

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          {/* <h4 className="pt-5">{props.shoes[현재 url 입력한 파라미터 숫자].title}</h4> */}
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Page;