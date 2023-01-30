import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const Qna = () => {

    const { 
        //폼안의 클릭함수
        handleSubmit, 
        //전송관련 함수
        register, 
        formState: { errors } } = useForm(); //유효성검사 _ 일단 error를 넣어둠 왜냐? 폼태그가 지금 공백이므로 -> 공백으로만 넘어가면 오류니까 (처음 폼이 비어있으므로 errors로 시작한다)

    //검수함수
    const onSubmit = values => console.log(values);


    //중복제출막기
    // const [statue, updateStatue] = useState(false);
    // const [values, setValues] = useState({
    //     comNm: "",
    //     email: "",
    //     password: "",        
    //     content: "",
        
    //   })
    
    // const handleChange = (e) =>{
    //     setValues({
    //         ...values,
    //         [e.target.name] : e.target.value
    //     })
    //     //input의 name을 변수이름과 같이 해서 식을 심플하게 처리
    // }
   
    // const sendform = async(e) => {
    //     e = e || window.event;
    //     e.preventDefault(); //새로고침하지마
    //     updateStatue(true); // 버튼막아
    //     //데이터를 전송하거나 유효성검사
    //     await new Promise( (r) => setTimeout(function(){
    //       console.log(JSON.stringify(values, null, 10))  
    //     }, 1000))
    //     updateStatue(false); //버튼정상화ㄴ
    // }

    return (
        <div id="qna" className='py-5'>
            <h2 className='text-center py-5'>문의하기</h2>

            <form onSubmit={handleSubmit(onSubmit)} className='col-6 mx-auto'>
              <ul>
                <li className='mb-2'>
                <input
                placeholder='이메일'
                className='w-100 d-block'
        type="email"
        {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
      />
      {/* errors.email = true 일때만 errors.email.message 나간다 라는 뜻 -> if문임 
      formstate의 설정해둔 errors의 이메일 에러 메세지 출력*/}
      {errors.email && errors.email.message}  
                </li>
    

      {/* <input
        type="email"
        {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
      /> */}
         {/* errors.email = true 일때만 errors.email.message 나간다 라는 뜻 -> if문임 
      formstate의 설정해둔 errors의 이메일 에러 메세지 출력*/}
      {/* {errors.email && errors.email.message}   */}
   
     
      <li className='mb-2'>
      <input
        className='w-100 d-block'
        placeholder='이름'
        {...register("username", {
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.username && errors.username.message}
  <p className='d-flex justify-content-end'>
      <button type="submit">보내기</button></p>
      </li></ul>
    </form>

            {/* <form onSubmit={ sendform } className='col-5 mx-auto'>
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
                               
            </form>             */}
            
        </div>
    );
}

export default Qna;