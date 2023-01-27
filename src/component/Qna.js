import React, { useState } from 'react';


const Qna = () => {


    //중복제출막기
    const [statue, updateStatue] = useState(false);
    const [values, setValues] = useState({
        comNm: "",
        email: "",
        password: "",        
        content: "",
        
      })
    
    const handleChange = (e) =>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
        //input의 name을 변수이름과 같이 해서 식을 심플하게 처리
    }
   
    const sendform = async(e) => {
        e = e || window.event;
        e.preventDefault(); //새로고침하지마
        updateStatue(true); // 버튼막아
        //데이터를 전송하거나 유효성검사
        await new Promise( (r) => setTimeout(function(){
          console.log(JSON.stringify(values, null, 10))  
        }, 1000))
        updateStatue(false); //버튼정상화ㄴ
    }

    return (
        <div id="qna" className='py-5'>
            <h2 className='text-center py-5'>문의하기</h2>

           

            <form onSubmit={ sendform } className='col-5 mx-auto'>
                <ul>
                    <li className='my-3'>                        
                        <input type="text" 
                               placeholder='회사명을 기입해주세요.' 
                               name="comNm"
                               value={values.comNm}
                               className="w-100"
                               onChange={ handleChange }
                                 />
                    </li>
                    <li className='my-3'>                        
                        <input type="text" 
                               placeholder='이메일을 기입해주세요.' 
                               name="email"
                               value={values.email}
                               className="w-100"
                               onChange={ handleChange }
                                 />
                    </li>
                    <li className='my-3'>                        
                        <input type="password" 
                               placeholder='패스워드을 기입해주세요.' 
                               name="password"
                               value={values.password}
                               className="w-100"
                               onChange={ handleChange }
                                 />
                    </li>
                    <li className='my-3'>                        
                        <input type="text" 
                               placeholder='한줄메모을 기입해주세요.' 
                               name="content"
                               value={values.content}
                               className="w-100"
                               onChange={ handleChange }
                                 />
                    </li>
                </ul>
                <div className='d-flex justify-content-end py-3'>
                    <button type="submit" disabled={statue}>문의하기</button> 
                </div>               
                               
            </form>            
            
        </div>
    );
}

export default Qna;