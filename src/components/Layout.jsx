import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';
import nba from '../assets/nba.jpg'
import '../css/Layout.css'

const Layout = () => {
  return (
    <div>
        <Nav className="nav">
          <Nav.Item style={{marginLeft:'30px'}}><img style={{width:'20px'}} src={nba}></img></Nav.Item>
          <Nav.Item className='item' style={{marginLeft:'380px'}}>
            <Nav.Link><Link className='link' to="/">Equipos</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item className='item'>
            <Nav.Link><Link className='link' to="/players">Jugadores</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item className='item'>
            <Nav.Link><Link className='link' to="/games">Partidos</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item className='item'>
            <Nav.Link><Link className='link' to="/stats">Estadísticas</Link></Nav.Link>
          </Nav.Item>
        </Nav>

        <section className='body'>
            <Outlet></Outlet>
        </section>
    </div>
  )
}

export default Layout