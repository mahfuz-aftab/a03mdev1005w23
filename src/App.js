import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Api from './pages/Api';
import Account from './pages/Account';
import About from './pages/Report';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);

  // handle user authentication
  const handleLogin = (user) => {
    setUser(user);
  }
  
  return (
    <BrowserRouter>
      <Navbar bg="warning" expand="lg" style={{ paddingLeft: '30px', paddingRight: '10px' }}>
        <Navbar.Brand href="/">MDEV 1005</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/tools">Tools</Nav.Link>
            <Nav.Link as={Link} to="/api">API</Nav.Link>
            <Nav.Link as={Link} to="/report">Report</Nav.Link>

            {user ? (
              <>
                {/* <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link> */}
                <Nav.Link disabled>{user.email}</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/account">Account</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/account">
          <Account onLogin={handleLogin} />
        </Route>
        <Route path="/tools">
          <Tools />
        </Route>
        <Route path="/api">
          <Api />
        </Route>
        <Route path="/report">
          <About />
        </Route>
        <Route path="/">
          <Home user={user} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
