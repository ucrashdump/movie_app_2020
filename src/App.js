import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation"

function App(){
  return <HashRouter> 
       <Navigation/>
    <Route path="/" exact={true} component={Home}>
      <h1>Home</h1>
    </Route>
    <Route path="/about" exact={true} component={About}>
    </Route>
  </HashRouter>;
}

export default App;
/* 

  // <HashRouter> 
  <BrowserRouter> #/같은 표시는 없어지는 대신에 github 페이지와 연동이 쉽지 않음.
  <Navigation/>만약 navigation이 Link를 쓰고 있으면 반드시 HashRouter나 BrowserRouter 안에 써야한다. (기능이 지원해야 하므로.)
  <footer>같은 것은 Router가 필요하지 않으므로 굳이 Router 안에 쓸 필요 없다.
  <Route path ="/" component={Home}/> 이렇게 하면 홈하고 about이 겹쳐서 나온다. 
  <Route path="/about" component={About}/>
  <Route path="/home" exact={true} component={Home}>이렇게 하면 나오지는 않으나,  /를 쓸 수 없고  exact 를 쓰면 된다.
  <Route path="/" exact={true} component={Home}>
    <h1>Home</h1>
  </Route>
  <Route path="/home/introduction" exact={true} component={Home}> 여기 부위하고도 겹쳐서 나오게 된다.
    <h1>Introduction</h1>
  </Route>
  <Route path="/about" exact={true} component={About}>

  </Route>
  </BrowserRouter>
// </HashRouter>
*/