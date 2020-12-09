const API_URL = "https://venados.dacodes.mx/api";

const getDataMovies =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=634b49e294bd1ff87914e7b9d014daed&language=en-US";

const getGames = () => {
  return fetch(getDataMovies, { method: "GET" }).then(handleResponse);
};

//Estas son las funciones que se usarían para consumir la api que falló
const getStadistics = () => {
  return fetch(API_URL + "/statistics", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then(handleResponse);
};

const getPlayers = () => {
  return fetch(API_URL + "/players", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then(handleResponse);
};

const getSponsors = () => {
  return fetch(API_URL + "/sponsors", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then(handleResponse);
};

const getNotifications = () => {
  return fetch(API_URL + "/notifications", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then(handleResponse);
};

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (response.status !== 200) {
      const error = (data && data.message) || response.statusText;
      console.log(error);
      return Promise.reject(error);
    }
    return data;
  });
}

const VenadosService = {
  getGames,
  getNotifications,
  getPlayers,
  getStadistics,
  getSponsors,
};

export default VenadosService;
