import React, { useState } from "react";
import "./Hero.css";
import HeroCard from "./BalanceCard/HeroCard";
import ExpenseCard from "./ExpenseCard/ExpenseCard";
import HeroChart from "./HeroChart/HeroChart";

function Hero() {

  // const [expense,setExpense] = useState('');

  // const expenseFrom =(val)=>{
  //   setExpense(val);
  // }
  return (
    <div className="hero-container">
      <div className="cards-container">
        <HeroCard />
       <ExpenseCard />
      </div>

      <HeroChart />
    </div>
    
  );
}

export default Hero;
