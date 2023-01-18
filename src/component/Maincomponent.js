import React from 'react';
import Banner from './Banner';
import Faq from './Faq';


function Maincomponent() {
    // props 실행문 "mainBanner"는 html에 뜨는 아이디명이다.
    return (
    <div>
        <Banner objid="mainBanner"></Banner>
      <div>
     <Faq></Faq>
      <div style={{height:"100vh"}} id = "review" className = "border-top bg-dark"></div>
      <div style={{height:"100vh"}} id = "qna" className = "border-top"></div>
    </div>
        </div>
    );
}

export default Maincomponent;