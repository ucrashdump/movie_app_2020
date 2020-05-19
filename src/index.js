import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('potato')
);/* 렌더링은 어플리케이션당 하나밖에 안됨. 다만 App 내에 Potato를 import 하고, 이를 App.js 에서 Potato를 가져오면서 가능하다.
Components is just a function that returns HTML.
다만 예상대로 <app /> <Potato /> 처럼 렌더링하는 것도 가능은 한데, potato하나에 묶기는 힘들 상황이다.
심지어 ReactDom.render를 두개 써서 하는 것도 가능하다.
ReactDOM.render renders your application on HTML. Your application is a group of many many components.
즉 지금이야 방금 위처럼 두개를 동시에 렌더링이 가능하지만, 복잡도가 증가하면 저 두개를 어떻게 배치해야하는지 등등을 
따져야하므로 실제적으로는 그런 복잡도와 배치문제로 한개만 렌더링하도록 만드는 것이 좋다.

*/