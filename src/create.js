import React, { useState, useContext ,useRef} from 'react';
import { Form, Button, CardBody } from 'react-bootstrap';
import UserContext from './context';
import Card from 'react-bootstrap/Card'
import './create.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Create() {
  const [name,setName] =useState('');
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const [accountCreated, setAccountCreated] = useState(false);
  const userContext=useContext(UserContext);
  const formRef = useRef();
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(password.length)
    if (password.length > 8) {
      alert('Password must be at lesser than 8 characters long.');
      return;
    }
   alert("Successfully created")
    userContext.users.push({ name, email, password, amount:0 });
  //   setName('');
  // setEmail('');
  // setPassword('');
  formRef.current.reset(); //reset the form fields using the form reference
  setName('');
  setEmail('');
  setPassword('');
  setAccountCreated(true);
  };
  const handleAddAnotherAccount = () => {
    setAccountCreated(false);
  };
  const isSubmitDisabled = !name.trim() || !email.trim() || !password.trim();
  return (
    <><div className='create-container'>
    <Card >
      <CardBody>
      <h1>Create</h1>
      <hr />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
        
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
          
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isSubmitDisabled}>
        {accountCreated ? 'Account Created' : 'Create Account'}
        </Button>
        {accountCreated && (
              <Button variant="secondary" onClick={handleAddAnotherAccount}>
                Add Another Account
              </Button>
        )}
      </Form>
      </CardBody>
      </Card>
      </div>
    </>
  );
}