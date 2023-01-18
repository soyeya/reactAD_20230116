import React from 'react';
import { useState } from 'react';


const Faq = () => {

    const [faqopen , faqupdate] = useState(false);

    const faq = (e) => {

        console.log(e.target.nextSibling)


    }
//get = Element에 잡힌다(jquery같은애들) _ querySelector = Node에 잡힌다.
    return (
        <div id ="faq" className='container py-5'>
        <h2 className='text-center pt-5 pb-3'>묻고 답하기</h2>
        <dl className='border col-8 mx-auto p-4'>
            <dt onClick = { () => {
                faqupdate(!faqopen) //반대값이 들어오게함
            } }>질문1</dt>
            <dd className= { !faqopen ? 'bg-dark text-white p-2' : 'd-none text-white p-2'}>답1</dd> 
            <dt>질문2</dt>  
            <dd className='bg-dark  d-none text-white p-2'>답2</dd>
            <dt>질문3</dt>
            <dd className='bg-dark  d-none text-white p-2'>답3</dd>
        </dl>
            
        </div>
    );// dl>(dt+dd)*4 //mx-auto(가운데정렬)

}

export default Faq;