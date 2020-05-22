import React from "react";

function About(props){
    console.log(props);//histroy, location, match, staticContext 모든 라우터는 기본적으로 이 네개의 props를 갖는다.
    return <span>About this page: I built it because I love movies.</span>;
}

export default About;