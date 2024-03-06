
import React, { useState, useContext } from "react";
import UserContext from "./context";
import "./deposit.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Withdraw() {
    const [withdraw, setWithdraw] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [total, setTotal] = useState(0);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const ctx = useContext(UserContext);

    const loginUser = () => {
        const user = ctx.users.find(
            (user) => user.email === username && user.password === password
        );

        if (user) {
            setLoggedInUser(user);
            setTotal(user.amount);
        } else {
            alert("Invalid credentials. Please check your username and password.");
        }

    };

    const handleWithdraw = (e) => {
        e.preventDefault();

        if (isNaN(withdraw)) {
            alert("Please enter a valid number for the withdraw amount.");

        }
        if (Number(withdraw) < 0) {
            alert("Please enter a positive withdraw amount.");

        }
        if (loggedInUser) {
            const userIndex = ctx.users.findIndex(
                (user) => user.email === loggedInUser.email
            );

            if (userIndex !== -1) {
                if (Number(withdraw) > ctx.users[userIndex].amount) {
                    alert("Withdrawal amount exceeds account balance. Not enough funds.");
                    return;
                }
                ctx.users[userIndex].amount -= Number(withdraw);
                setTotal(ctx.users[userIndex].amount);
            }
        } else {
            alert("Please log in before making a Withdrae.");
        }

        alert(`Successfully withdraw rupees ${withdraw}`)
    };

    return (
        <>
            <div className="deposit-container">
                <Card className="deposit-card">
                    <Card.Body>
                        <h1>withdraw</h1>
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
                        <hr />
                        <label>
                            Withdraw Amount:
                            <input
                                type="text"
                                onChange={(e) => setWithdraw(e.target.value)}
                                disabled={!loggedInUser}
                                required />
                        </label>
                        <br />
                        <button onClick={handleWithdraw} disabled={!withdraw} >
                            Submit
                        </button>
                        {loggedInUser && <p>Withdraw: {total}</p>}
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}