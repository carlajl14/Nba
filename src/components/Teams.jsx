import React from 'react'
import useTeam from '../hooks/teamHook';
import Table from 'react-bootstrap/Table'

const Teams = () => {

    const [teams] = useTeam();

  return (
    <div className='container pt-3 mt-2 pb-2'>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre Equipo</th>
                    <th>Ciudad</th>
                    <th>Abreviación</th>
                </tr>
            </thead>
            <tbody>
        {
            teams.map((team) => {
                return(
                    <tr>
                        <td>{team.id}</td>
                        <td>{team.full_name}</td>
                        <td>{team.city}</td>
                        <td>{team.abbreviation}</td>
                    </tr>      
                )
            })
        }
            </tbody>
        </Table>
    </div>
  )
}

export default Teams