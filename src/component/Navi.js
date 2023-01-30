import React , { useState } from 'react';
import logo from '../logo.svg';
import navicss from '../css/navi.module.css';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import navijson from '../json/navi.json';

//npm i react-router-dom
//npm install react-bootstrap bootstrap
//npm i react-scrollspy

function Navi() {

    const [ colorMode , updataColor ] = useState(true);
    const [ activenum , updateactive ] = useState(-1); //처음 초기값은 불이 들어오지 않게 설계 _ 값이 없음

 const naviactive = (e) => {

    const navitag = e.target.parentElement.parentElement;  //a - li- ul까지 접근 왜? 인덱스번호추출하려고(li는 인덱스번호가 나오지 않는다)
//태그요소를 정렬
//[li, li, li, li]
    // console.log(navitag.children.length); //4
    //li태그들의 나열을 정렬데이터
    const navitagArr = [...e.target.parentElement.parentElement.children] //정확하게 가공시킴
    //숫자
    const mynum = navitagArr.indexOf(e.target.parentElement);
     //indexOf - 자릿수를 찾아줌 -> -1의 결과값이 나오는 경우? = 못찾았다는 뜻
    updateactive(mynum); //화면을 새롭게 랜더링
    console.log(activenum);

 }

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
            {
                navijson.nav.map((el, idx) => {

                    return(

                        <li key={'gnb' + idx}>
                            <a href={el.href} onClick={naviactive} className = {
                                activenum == idx ? 'active': null
                            }>{el.title}</a>
                        </li>
                    )
                })
            }
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