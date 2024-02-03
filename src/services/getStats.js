const getStats = async() => {
    const url = 'https://www.balldontlie.io/api/v1/stats?seasons[]=2019';
    const res = await fetch(url);
    const stat = await res.json();
    console.log(stat);
    return stat;
}

export default getStats;