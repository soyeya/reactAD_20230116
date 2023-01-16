import React , { useState } from 'react';
import logo from '../logo.svg';
import navicss from '../css/navi.module.css';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

//npm i react-router-dom
//npm install react-bootstrap bootstrap
//npm i react-scrollspy

function Navi() {

    const [ colorMode , updataColor ] = useState(true);


    return (
        <div className={colorMode ? 'lightmode fixed-top ' : 'darkmode fixed-top'}>
        <div className={`${navicss.hd} 
        border-bottom py-3 px-4 d-flex justify-content-between align-items-center`}>
        
        <h1>
        {/* //class명을 기준으로 생성되었으므로 아이디 사용시 따로 아이디 css파일을 만든다. */}
 <Link to ="/"><img src={logo} alt="" /></Link>
        </h1>
        {/* 태그가 아닌 자바스크립트가 내장되어있는 실행식이다 */}
        <Scrollspy className='d-flex justify-content-between align-items-center'>
            <li>
                <Link to = "/about">뇌새김소개</Link>
                </li>
            <li>
                <a href="#process">뇌새김의 학습원리</a>
            </li>
            <li>
                <a href="#review">뇌새김의 후기</a>
            </li>
            <li>
                <a href="#qna">문의하기</a>
            </li>
        </Scrollspy>
        <ul id="sns" className='d-flex'>
            <li>
                <a href="http://www.youtube.com" target="_blank">유투브</a>
            </li>
            <li>
                <a href="http://www.youtube.com" target="_blank">자료실</a>
            </li>
            <li>
                <button style={{border : "none" , background : "#eee" , borderRadius : "3px" , textTransform : "uppercase" , padding : "3px"}}onClick={() => {
                  updataColor(!colorMode)}}> {colorMode ? 'lightmode' : 'darkmode'}</button> 
                  {/* 글자를 나타났다 숨겼다 하는 장치 */}
            </li>
            
        </ul>
        
        </div>
        </div>
    );
}

export default Navi;