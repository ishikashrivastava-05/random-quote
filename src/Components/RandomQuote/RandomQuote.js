import React,{useState} from 'react'
import "./RandomQuote.css"
function RandomQuote() {
  let quotes = [];
  async function loadQuotes(){
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const random = () => {
    const select = quotes[Math.floor(Math.random()*quotes.length)]
    setQuote(select);
  }
  const [quote,setQuote]=useState({
    text:"Difficulties increase the nearer we get to the goal.",
    author:"Ishika Shrivastava"
  })
  const twiter = ()=>
  {
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(",")[0]}`)
  }

  loadQuotes();
  return (
    <div>
      <div className='container'>
        <div className='quote'>{quote.text}</div>
       <div>
       <div className='line'></div>
       <div className='bottom'>
        <div className='author'>{quote.author.split(",")[0]}</div>
        <div className='icons'>
          <img src='https://cdn-icons-png.flaticon.com/128/2659/2659360.png' onClick={()=>{random()}}/>
          <img src='https://cdn-icons-png.flaticon.com/128/1829/1829586.png'  onClick={()=>{twiter()}}/>
        </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default RandomQuote
