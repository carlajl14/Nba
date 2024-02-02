const getTeams = async() => {
    const url = "https://www.balldontlie.io/api/v1/teams";
    const res = await fetch(url);
    const team = await res.json();
    console.log(team);
    return team;
}

export default getTeams;