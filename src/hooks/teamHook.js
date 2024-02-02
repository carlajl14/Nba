import React, { useEffect, useState } from 'react'
import getTeams from '../services/getTeams';

const useTeam = () => {

    //Estado
    const [team, setTeam] = useState([]);

    //Guardar en el estado lo que devuelve el api
    const teams = async() => {
        const newTeam = await getTeams();
        setTeam(newTeam.data);
    };

    //Cargar el estado una vez al inicio
    useEffect(() => {
        teams();
    }, []);

    //Devolver el estado
    return [team];
}

export default useTeam;