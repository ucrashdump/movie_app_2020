import React from 'react';
import PropTypes from 'prop-types'
//3.2 component life cycle 행의 질문 다시 살펴볼 것
class App3 extends React.Component {
    // react.component에서는 render 함수만 씀.(보통은) life cycle method 가 render에 있음.
    // component의 생성: mounting. 변경 update, 제거: unmounting constructor(): 자바스크립트에서 온
    // class 생성자. constructor(props){   super(props);//별로 안중요함. 어쨌든 constructor는
    // 자바스크립트에서 왔다는 것이 중요함. console.log("hello"); }

    state = { //바꿀 데이터는 state에 넣어라. state 는 object 지, list 가 아니다.
        // state는 사실 이름을 바꿀 수 있을지는 모르겠으나 사실상 state로 고정하는게 차후 이를 활용하는 다른 함수가 바로 사용할 수
        // 있으므로 이름은 고정하는 것이 좋다. 실제로 react 경고 같은 문구에서 state라고 직접 명시해놓았으니 바뀔 일은 없다. add =
        // () => {..} : 변수에 함수를 넣어라 / Correct. An arrow function inside the variable
        // 'add'

        count: 0
    }
    add = () => {
        // console.log("add"); this.state.count=1;// 이렇게 직접적으로 state의 내용을 변경하려 하지말 것.
        // (도움말에 직접 쓰여져 있음. Do not mutate state directly) 왜 안되냐? render함수에서 직접적으로
        // refresh를 하지 않기 때문이다. setState function 을 호출하면 react가 알아서 우리가 언제 setState를
        // 호출할지 알고 내가 view를 refresh 하길 알며, render function 을 refresh 하길 원하는 것을 앎.
        // this.setState({count: this.state.count + 1});//state 는 object이므로 새로운 state를
        // 받아야 함.
        this.setState(current => ({
            count: current.count + 1
        })); //
        // setState 호출시 react는 state를 refresh하고 render function 을 호출한다. 이미 virtual DOM이
        // 있으므로 react는 나머지는 냅두고 해당 부분만 변경해서 render 함수를 호출한다. setState를 호출할 때마다 react는
        // 새로운 state와 함께 render function 을 호출한다. setState가 아닌 직접적인 변경은 아무런 render호출을
        // 안하므로 절대 화면이 변경되지 않는다. setState is refreshing only state? or whole page? (as i
        // understood is whole page) -> setState refreshes the component. Not the page.
        //
        //setState()를 사용하면, 호출할 때마다 react는 새 state와 함께 render를 refresh 한다.
        /*
    this.setState({count:this.state.count +1}) 이것보다
this.setState(current => ({ count: current.count + 1 })) 을 왜 추천해주시나요?
->
I recommend 'this.setState(current => ({ count: current.count + 1 }))' because it's 100% sure that you're gonna get the current state.
If you do 'this.setState({count:this.state.count +1})'  you have a change that while you're doing that, this.state changes from some other place.
Here this.setState(current=>({ count: current.count + 1 })); you know that definitely 'current' is the current state.

Here this.setState({count:this.state.count+1}) 'this.state' might be out of sync because of many many updates happening so you can't trust the 'this.state.count' to hold the current value correctly.

    */
        /*
    1. setState always passes the current data with an argument.
2. You shouldn't depend on state because there are many updates happening so you can't trust them.

*That's why you are passing the argument to use the current state(current data) from setState since React is offering the current state(current data) for setState.

3. when setState is called, React always re-render with new state(new data).
4. You never change state directly.
5. You always need setState to change data.
6. To be able to change data or use state, you need "class" that's why we aren't using function App().

Please let me know if I made any mistakes.
->
6. Is not true anymore, now you can change state in function components using Hooks, I made a course about Hooks as well so when you finish this one take the other one.
Hooks makes working with React even better.

See you there!


    */
    };
    // I would recommend you to work with arrow functions so the 'this.setState'
    // works. 화살표 함수를 쓰지 않으면 this.setState가 작동하지 않는다. function add(blah){blah blah}
    // : function add(blah){this.setState} 후자 것이 안된다.
    /*
  Before, I used
    add = function() { ... }
And I got Error msg
    Uncaught TypeError: Cannot read property 'setState' of undefined

After fixing to Arrow Function,
    add = () => { ... }
And then it operates well

Nicolas, I want to know why this happens.
->
Inside of "function(){}" the 'this' does not refer to the Component's 'this'.

function(){} has a separate 'this'

When you do add = () => {} the 'this' refers to the Component.
  */
    // 하지만 변수인 것과는 다르게 변수를 클래스 안에 만드므로 따로 const를 쓰지 않는다. 정확히는 다른 것을 쓰는 것이 맞긴 한데.
    remove = () => {
        // console.log("minus"); this.setState({ count:this.state.count -1 }); 나중에 이렇게
        // 하지 않는다. 성능상의 문제가 있어서. 그러나 일단은 이렇게 둠.
        this.setState(current => ({
            count: current.count - 1
        }));
    };
    componentDidMount() {
        console.log("component rendered");
    }
    //component 업데이트 시 호출되는 함수중에 하나가 static getDerivedStateFromProps()
    componentDidUpdate() {
        console.log("I just updated");
    }
    // componentWillUnmout(){   console.log("Good bye cruel world"); }
    render() {
        console.log("rendering");
        // life cycle method가 있다(이 component의 생성과 제거 담당.) component 생성시 render 이전에 몇가지
        // 함수를 호출함. render 호출뒤에는 다른 함수 호출함.
        return <div>
            <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.remove}>Minus</button>
        </div>;
        //바꾸고 싶은 데이터를 state에 넣는것이다.

    }
}

/* function App( return ();) 이 경우는 function component 로 직접적으로 리턴을 해준다.
이를 통해서 screen 에 표시.
반면 class component의 경우는 class 라서 직접적으로 return 값을 가지지 않음. react component로 확장받아서
render를 가질 수 있게 되고, 이를 통해서 return 값을 가져 이를 통해서 screen 에 표시가 가능해진다.
react 자동적으로 class component의 render 함수를 실행한다.
왜 class component를 하느냐? state 를 넣을 수 있음 state 는 object이고 component에
데이터를 넣을 공간이 있다는 뜻이다. 이 데이터는 변할 수 있다.
 */

export default App3;
