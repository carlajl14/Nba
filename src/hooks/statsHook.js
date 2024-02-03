import { useEffect, useState } from 'react'
import getStats from '../services/getStats';

const useStats = () => {

    //Estado
    const [stat, setStat] = useState([]);

    //Guardar en el estado lo que devuelve el api
    const stats = async() => {
        const newStat = await getStats();
        setStat(newStat.data);
    };

    //Cargar el estado una vez al inicio
    useEffect(() => {
        stats();
    }, []);

    //Devolver el estado
    return [stat];
}

export default useStats;