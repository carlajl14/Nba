import { useEffect, useState } from 'react'
import getGames from '../services/getGames';

const useGame = () => {

    //Estado
    const [game, setGame] = useState([]);

    //Guardar en el estado lo que devuelve el api
    const games = async() => {
        const newGame = await getGames();
        setGame(newGame.data);
    };

    //Cargar el estado una vez al inicio
    useEffect(() => {
        games();
    }, []);

    //Devolver el estado
    return [game];
}

export default useGame;