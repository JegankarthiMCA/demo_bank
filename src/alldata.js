import { json } from "react-router-dom"
import UserContext from "./context"
import { useContext } from "react"
import { Card, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './alldata.css'
export default function Alldata(){
const ctx=useContext(UserContext)
    return(<>
    <div className="alldata-container">
        <Card className="alldata-card">
          <Card.Body>
          <h1>Alldata</h1>
          <hr />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {ctx.users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.amount}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}