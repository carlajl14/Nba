const getPlayers = async() => {
    const url = "https://www.balldontlie.io/api/v1/players";
    const res = await fetch(url);
    const player = await res.json();
    console.log(player);
    return player;
}

export default getPlayers;