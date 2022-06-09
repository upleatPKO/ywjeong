// 다른 파일에 있는 변수 가져오려면 export 문법 사용해야

// let a = 10;
// let b = 100;

//export default 변수명;
// export default a;

//export 여러개 하려면: export {변수1, 변수2}
// export {a, b}

// object 자료형 설명
// let b = {name : 'kim', age : 20}
// b.name


let data = [ // [] 안에 있으니 배열 array형
    {
        id : 0,
        title : "White and Black",
        content : "Born in France",
        price : 120000
    },
    {
    id : 1,
    title : "Red Knit",
    content : "Born in Seoul",
    price : 110000
    },

    {
    id : 2,
    title : "Grey Yordan",
    content : "Born in the States",
    price : 130000
    }
]

export default data;
