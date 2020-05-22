import React from 'react';
import PropTypes from 'prop-types'
// function Food(props){
function Food({name, picture, rating}) { //{favorite}은 단순히 변수명이 아니라, 아래에 있는 properties의 이름자체를 뜻한다.
    //아래와 이름이 맞지 않으면 전혀 불러올 수 없으니 주의 npm start npm i prop-types

    return (
        <div>
            <h2>I like {name}</h2>
            <h4>rating: {rating}/5.0</h4>
            <img src={picture} alt={name}/>
        </div>
    ); // es6에서 지원. 아닌 경우는 위의 props.fav로 변경.
}
Food.propTypes = { //propTypes는 이름 바꿀 수 없음.
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired //number or undefined인 경우에는 isrequired 가 빠지면 오류 출력이 없음.
}
/* const friends = ["dal","mark","lynn","japan guy"]
 * friends.map(function(current){
console.log(current);
return 0
})
 * friends.map(current=>{console.log(current);
return 0})
실행결과
"dal"
"mark"
 * "Lynn"
"japan guy"
[0,0,0,0]

friends.map(function(friend){
return
 * friend+"❤";
})
 */
const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://img.kr.news.samsung.com/kr/wp-content/uploads/2013/07/%EA%B9%80%EC%B9%" +
                "98_03.jpg",
        rating: 5
    }, {
        id: 2,
        name: "Samgyeopsal",
        image: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1." +
                "daumcdn.net%2Fcfile%2Ftistory%2F2431263958B8DA212C",
        rating: 4.8
    }, {
        id: 3,
        name: "Bibimbap",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/" +
                "1200px-Dolsot-bibimbap.jpg",
        rating: 5.5
    }, {
        id: 4,
        name: "Doncasu",
        image: "http://img.sbs.co.kr/newsnet/etv/upload/2014/01/10/30000347969_700.jpg",
        rating: 4.8
    }, {
        id: 5,
        name: "Kimbap",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vegetable_gimbap.jpg" +
                "/1200px-Vegetable_gimbap.jpg",
        rating: 4.7
    }

];

function renderFood(dish) {
    console.log(dish);
    return <Food key={dish.id} name={dish.name} picture={dish.image}/>
}

function App2() {
    return (
        <div>
            {/* Hello!!!!! 아래방법을 통해서 감자함수를 가져온다. */}
            {/* <Potato /> */}
            {/* <Food favorite="kimchi" something={true}
      papapapap={["hello",1,2,3,4,true]}/>  이 방법이 prop fav에 kimchi라는 value를 주는 방법이다. fav를 props라고 한다. */
            }
            {/* <Food favorite="ramen"/> */}
            {/* <Food favorite="samgyeopsal"/> */}
            {/* <Food favorite="chukumi"/> */}
            {
                foodILike.map(dish => (
                    //dish 는 object이며, 단순히 배열(array)에 대한 변수값이다.
                            <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/> //name의 경우 위에서 Food Function에서 Favorite라고 되어있던 것을 name으로 변경하여 적용하였는데,
                    // 단순히 변수의 이름이 아니라 연결되는 object이므로 맞춰서 써줘야 한다. dish.name의 경우는 foodILike의 name,
                    // image중에 변수 이름 하나 foreach의 경우와 비슷해보이는데 map은 return 값과 배열을 반환해주는 특징이 있다.
                    // foreach는 아무것도 안해서 이를 반환해주지 못하고 직접 지정해줘야 한다. App()내에 다 넣어서 할 수도 있으나 로직이 너무
                    // 커지므로 나눠서 할것.
                ))
            }
            여기서부터는 renderFood로 직접 진행 {foodILike.map(renderFood)}
            같은 내용

        </div>
    );
}

export default App2;
