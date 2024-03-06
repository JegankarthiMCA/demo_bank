import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
export default function Navbar() {



  return (<>

    <Nav fill variant="tabs" className='custom-navbar'>
      <Nav.Item>
        <Nav.Link href="#/"><img src="bank.png" alt="Logo" className="logo" />BAD BANK</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/create">Create</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/deposit">Deposit</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/withdraw">Withdraw</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/alldata">Alldata</Nav.Link>
      </Nav.Item>

    </Nav>
  </>
  );
}
