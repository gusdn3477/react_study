import React, { Component } from 'react';
import logo from './logo.svg';
class Test2 extends Component{
    
    render(){
        const style={
            fontColor : "orange",
            fontSize : "40px",
            marginTop : 20
        };

        return <div style={style}><h2>안녕하세요</h2><img src={logo}></img></div>
    }
}

export default Test2;