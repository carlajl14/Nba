import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <Nav>
      <Nav.Item>
        <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><Link to="/teams">Equipos</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><Link to="/players">Jugadores</Link></Nav.Link>
      </Nav.Item>
    </Nav>

        <section>
            <Outlet></Outlet>
        </section>
    </div>
  )
}

export default Layout