import React, { useEffect, useState } from 'react'
import getPlayers from '../services/getPlayers';

const usePlayer = () => {

    //Estado
    const [player, setPlayer] = useState([]);

    //Guardar en el estado lo que devuelve el api
    const players = async() => {
        const newPlayer = await getPlayers();
        setPlayer(newPlayer.data);
    };

    //Cargar el estado una vez al inicio
    useEffect(() => {
        players();
    }, []);

    //Devolver el estado
    return [player];
}

export default usePlayer;