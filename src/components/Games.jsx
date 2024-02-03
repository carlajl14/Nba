import React from 'react'
import Card from 'react-bootstrap/Card'
import useGame from '../hooks/gameHook'

const Games = () => {

    const [partidos] = useGame();

  return (
      <div className='container d-flex flex-wrap pb-2'>
        {
            partidos.map((game) => {
                return(
                    <Card key={game.id} className='me-3 mt-3' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Partido: {(game.date).slice(0, 10)}</Card.Title>
                            <div>
                                <Card.Text>{game.home_team.name} - {game.home_team_score}</Card.Text>
                                <Card.Text>{game.visitor_team.name} - {game.visitor_team_score}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card> 
                )
            })
        }
    </div>
  )
}
export default Games