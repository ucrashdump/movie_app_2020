import React from 'react';


class Detail extends React.Component{
    //참고로 componentDidMount 없이 렌더에서 다 처리할 수도 있다.
    componentDidMount() {
        console.log(this.props);
        const {location, history} = this.props;
        console.log(location.state);
        if(location.state === undefined){
            history.push("/");// state가 없으면 홈으로 보냄.
        }
    }
    render(){
        const {location} = this.props;
        
        return <span>{location.state.title}</span>;
        // 다만 이렇게 하면 location.state에 정보가 없으면 오류가 난다.(단순 새로고침시)
        // 두가지 방법 2번은 :id 같은 걸로 처리 
        // https://reacttraining.com/react-router/web/api/Redirect 참고
    }
}
/*
1번
if(location.state){
            return <span>{location.state.title}</span>
        }else{
            return null;
        } */

export default Detail;