import React from 'react'
import usePlayer from '../hooks/playerHook'
import Table from 'react-bootstrap/Table'

const Players = () => {

    const [players] = usePlayer();

  return (
    <div className='container'>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Jugador</th>
                    <th>Equipo</th>
                    <th>Ciudad</th>
                </tr>
            </thead>
            <tbody>
        {
            players.map((player) => {
                return(
                    <tr>
                        <td>{player.first_name} {player.last_name}</td>
                        <td>{player.team.full_name}</td>
                        <td>{player.team.city}</td>
                    </tr>      
                )
            })
        }
            </tbody>
        </Table>
    </div>
  )
}

export default Players