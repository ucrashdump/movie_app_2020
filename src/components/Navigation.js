import React from 'react';
import {Link} from "react-router-dom"

function Navigation(){
    return <div>
        {/* <a href="/">Home</a>이렇게 하면 직접 웹페이지 이동으로 새로고침 하게 된다. */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}
//<Link to={{pathname:"/about",state:{fromNavigation:true}}}>About</Link>fromNavigation은 임의의 값 으로 이 또한 전달해준다.
export default Navigation;
