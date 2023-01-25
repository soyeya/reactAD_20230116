import React, { useState } from 'react';

const Qna = () => {
    const [ password, setPassword ] = useState("");
    const [ statue, updateStatue] = useState(false);

    const changePw = ({ target : {value} }) => setPassword(value);
    const sendform = async (e) => {
        //폼태그는 기본적으로 새로고침한다.
        //폼태그가 중복 실행되지않도록 막아야한다.
        updateStatue(true); //버튼막아
        e = e || window.event;
        e.preventDefault(); //싱글페이지니깐 새로고침하지마
        await new Promise( (r) => setTimeout(r, 1000)) 
        //동기화시키는중_ 내가 닫을 때까지 아래는 작동하지마!_ 자바스크립트는 순서있게 작동하는게 아니라 하극상을 많이 일으키는 존재이므로 가변적이다. (건너뛰고 실행하는 경우가 많음) = 이걸 사용하므로써 나 건너뛰고 실행하지마! 라고 시간을 만듦
        alert(`수정된 비밀번호 확인해보기 ${password}`)       
        updateStatue(false); // 다시버튼기능돌려줘
    }

    return (
        <div id="qna" className='py-5'>
            <h2 className='text-center py-5'>문의하기</h2>
            <form onSubmit={ sendform } className='col-6 mx-auto'>
                <input type="password" 
                       value={password} 
                       name="pw"
                       onChange={ changePw  }
                         />
                <button type="submit" disabled={statue}>변경하기</button>    
                 {/* disabled = {statue} -> 중복처리되지 않도록 제어 역할 */}            
            </form>            
        </div>
    );
}

export default Qna;