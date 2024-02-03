const getGames = async() => {
    const url = "https://www.balldontlie.io/api/v1/games";
    const res = await fetch(url);
    const game = await res.json();
    console.log(game);
    return game;
}

export default getGames;