{/* <Container>
  <Row>
    <Col>
      {/* 퍼블릭 폴더에 있는 이미지 사용할 때 쓰는 방식 
      <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%"/> 
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
      <h4>{shoes[0].title}</h4>
      <p>{shoes[0].content}</p>
    </Col>
    <Col>
      <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
      <h4>{shoes[1].title}</h4>
      <p>가격: {shoes[1].price}</p>
    </Col>
    <Col>
      <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
      <h4>{shoes[2].title}</h4>
      <p>{shoes[2].content}</p>
    </Col>
  </Row>
</Container> */}

<ul className='shoes-list'>
  {
  shoes.map(function(a, i){
    return(
      <li key={i}>
        <img src={'https://codingapple1.github.io/shop/shoes' + (i+1) + '.jpg'} width="80%"/>
        <h4>{shoes[i].title}</h4>
        <p>{shoes[i].content}</p>
      </li>
    )
  })
  }
</ul>