import React from 'react';
import faqdb from '../json/faqdb.json';


const Faq = () => {

   
    return (
        <div id="faq" className='container py-5'>
<h2 className='text-center pt-5 pb-3'>묻고 답하기</h2>                
<ul className='border col-8 mx-auto p-4'>
{
    faqdb.faqlist.map((el, idx)=>{
        //spilt은 문자열을 특정문자로 정렬해 데이터타입을 변경 _ 반대가 join
        var listArr = el.faqContent.split('/'); 
        return (
            <li key={ 'faqcom'+ idx }>
                <strong role="button" 
                onClick={ e => { 
                    e = e || window.event;
                    e.target.nextSibling.classList.toggle('d-none')
                    }}>{el.faqtitle}
                </strong>
                <p className='d-none bg-dark text-white py-3'>
                    {/* \n -> json에서 문자떨어짐보다는 엔터를 못쓰니까 사용 */}
                    {
                   
                    listArr.map((eel, index) => {
                        return <strong key = {'f' + index}>{eel}</strong> //<>_ 프레그먼트_ 태그없이 문법상으로 맞게 떨어지도록 할 때 사용
                    })
                    
                    }
                </p>
            </li>    
        )
    })
}
</ul>
</div>
);}

export default Faq;