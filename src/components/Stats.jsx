import useStats from '../hooks/statsHook'
import Card from 'react-bootstrap/Card'

const Stats = () => {
    const [stats] = useStats();

    return (
        <div className='container d-flex flex-wrap pb-3 me-5'>
          {
              stats.map((stat) => {
                  return(
                      <Card key={stat.id} className='me-3 mt-3' style={{ width: '18rem' }}>
                          <Card.Body>
                              <Card.Title className='text-center'>{stat.player.first_name} {stat.player.last_name}</Card.Title>
                              <div>
                                  <Card.Text>Puntos: {stat.pts}</Card.Text>
                                  <Card.Text>Rebotes: {stat.reb}</Card.Text>
                                  <Card.Text>Equipo: {stat.team.full_name}</Card.Text>
                              </div>
                          </Card.Body>
                      </Card> 
                  )
              })
          }
      </div>
    )
}

export default Stats