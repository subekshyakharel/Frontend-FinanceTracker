import React, { useEffect, useState } from 'react'
import { GrMoney } from "react-icons/gr";

    const financialTips = [
  {
    tip: "Start Saving Early",
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    expert: "Warren Buffett"
  },
  {
    tip: "Invest in What You Understand",
    quote: "Never invest in a business you cannot understand.",
    expert: "Warren Buffett"
  },
  {
    tip: "Diversify Your Portfolio",
    quote: "Don’t put all your eggs in one basket.",
    expert: "Andrew Carnegie"
  },
  {
    tip: "Live Below Your Means",
    quote: "If you buy things you do not need, soon you will have to sell things you need.",
    expert: "Warren Buffett"
  },
  {
    tip: "Set Financial Goals",
    quote: "A goal without a plan is just a wish.",
    expert: "Antoine de Saint-Exupéry"
  },
  {
    tip: "Build an Emergency Fund",
    quote: "Save money and money will save you.",
    expert: "John Soforic"
  }
];

const FinanceTips = () => {
    const [showQuote, setShowQuote] = useState(financialTips[0]);

    useEffect(()=>{
        setInterval(()=>{
            setShowQuote(financialTips[Math.floor(Math.random() * financialTips.length)])
        }, 5000)
    }, [])

    const {tip, quote, expert}= showQuote;

  return (
    <div className='d-flex flex-column justify-content-center' 
    style={{height:"100%"}}>
      <div className='text-center pb-4'>
        <GrMoney className='text-success'  style={{fontSize:"10rem"}}/>
        <p>Grow your money!</p>
      </div>
      <h3>{tip}</h3>
      <div className='fw-bolder'>"{quote}"
     - {expert}
     </div>
    </div>
  )
}

export default FinanceTips
