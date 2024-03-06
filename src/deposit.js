
import React, { useState, useContext } from "react";
import UserContext from "./context";
import "./deposit.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Deposit() {
  const [dep,setDep] = useState(0);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [total,setTotal] = useState(0);
  const [loggedInUser,setLoggedInUser] = useState(null);

  const ctx =useContext(UserContext);
 const loginUser =()=>{
    const user = ctx.users.find(
      (user) =>user.email===username&&user.password===password
    );
    if(user) {
      setLoggedInUser(user);
      setTotal(user.amount);
    } else {
      alert("Invalid credentials. Please check your username and password.");
    }
};

  const handleDeposit =(e)=>{
    e.preventDefault();
    
  if(isNaN(dep)) {
    alert("Please enter a valid number for the deposit amount.");
    return;
  }

  if(Number(dep)<0) {
    alert("Please enter a positive deposit amount.");
    return;
  }
    
    if(loggedInUser) {
      const userIndex = ctx.users.findIndex(
        (user)=>user.email===loggedInUser.email
      );

      if (userIndex !== -1) {
        ctx.users[userIndex].amount += Number(dep);
        setTotal(ctx.users[userIndex].amount);
      }
    } else {
      alert("Please log in before making a deposit.");
    }
    alert(`Successfully deposit rupees ${dep}`)
  };

  return (
    <>
    <div className="deposit-container">
      <Card className="deposit-card">
        <Card.Body>
      <h1>Deposit</h1>
      
      <label>
        Username (Email):
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      
      <button onClick={loginUser}>Login</button>
      
      <br />
      <label>
      <hr />
        Deposit Amount:
        
        <input
          type="text"
          onChange={(e) => setDep(e.target.value)}
          disabled={!loggedInUser}
        required/>
      </label>
      <br />
      <button onClick={handleDeposit} disabled={!dep} >
        Submit
      </button>
      {loggedInUser && <p>Balance: {total}</p>}
      </Card.Body>
      </Card>
    </div>
    </>
  );
}