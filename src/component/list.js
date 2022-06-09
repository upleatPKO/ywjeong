function List(props){ 
    return(
      <ul className='shoes-list'>
        <li>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          <h4>{props.shoes[0].title}</h4>
          <p>상품설명: {props.shoes[0].content}</p>
          <p>가격: {props.shoes[0].price} 원</p>
        </li>
        <li>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
          <h4>{props.shoes[1].title}</h4>
          <p>상품설명: {props.shoes[1].content}</p>
          <p>가격: {props.shoes[1].price} 원</p>
        </li>
        <li>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
          <h4>{props.shoes[2].title}</h4>
          <p>상품설명: {props.shoes[2].content}</p>
          <p>가격: {props.shoes[2].price} 원</p>
        </li>
      </ul>
    )
  } 