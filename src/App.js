import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']); 
  let [따봉, 따봉변경]= useState([0,0,0]);

  let [modal, setModal]= useState(false); 

  let [title, setTitle] = useState(0);
  //<input> 저장하기 위한 state 생성 (그냥 변수여도 상관없음)
  let [입력값, 입력값변경] = useState('');  //문자 저장할거기 때문에 텅빈 문자를 초기값으로 지정
  
  const date = new Date();
  
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);
  const dateStr = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  
  let [날짜, 날짜변경] = useState([dateStr,dateStr,dateStr]);
  let rizi = dateStr;
  

  return (
    <div className="App"> 
      <div className="black-nav">
        <h4>ReactBlog</h4> 
      </div>

      {

        글제목.map(function(a, i) {
          return (
            <div className="list" key={i}>
            <h4 onClick={() => {setModal(!modal); setTitle(i)}}>{ 글제목[i] } 

            <span onClick={(ee) => 
              {
                ee.stopPropagation();
                let copy따봉 = [...따봉];
                copy따봉[i] = copy따봉[i]+1;
                따봉변경(copy따봉)
                }}>👍</span> {따봉[i]} </h4>
            <p>{ 날짜[i] } 발행</p>
            
            <button onClick={() => {
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy)

              let copyDate = [...날짜];
              copyDate.splice(i, 1);
              날짜변경(copyDate)
            }}>삭제</button>
          </div>
          )
        })
      }

      <input onChange={(e) => {입력값변경(e.target.value)}}/>
      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값);
        입력값 == '' ? alert("값을 입력해주세요") : 글제목변경(copy)

        let copy따봉 = [...따봉];
        copy따봉.unshift(0);
        따봉변경(copy따봉)

        let copyDate = [...날짜];
        copyDate.unshift(rizi);
        날짜변경(copyDate);
            
      }}>추가</button>
      

      {
        modal == true ? 
        <Modal 
        날짜 = {날짜}
        title = {title}
        글제목 = {글제목}
        글제목변경 = {()=>{
          let copy = [...글제목];
          글제목변경(copy)}}
        /> : null  
      }

    </div>


  );
}


function Modal(props) {    
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>{props.날짜[props.title]}</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}


export default App;
