const API_URL = "https://venados.dacodes.mx/api";

const getGames = () => {

return fetch(API_URL + "/games", { method: "GET", headers: {
    "Accept": "application/json",
  }}).then(
    handleResponse
  );
};

const getStadistics = () => {

    return fetch(API_URL + "/statistics", { method: "GET", headers: {
        "Accept": "application/json",
      }}).then(
        handleResponse
      );
    };


    const getPlayers = () => {

        return fetch(API_URL + "/players", { method: "GET", headers: {
            "Accept": "application/json",
          }}).then(
            handleResponse
          );
        };

        const getSponsors = () => {

            return fetch(API_URL + "/sponsors", { method: "GET", headers: {
                "Accept": "application/json",
              }}).then(
                handleResponse
              );
            };

            const getNotifications = () => {

                return fetch(API_URL + "/notifications", { method: "GET", headers: {
                    "Accept": "application/json",
                  }}).then(
                    handleResponse
                  );
                };



function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (response.status !== 200) {
      if (response.status === 401 || response.status === 500) {
        // auto logout if 401 response returned from api
        window.location.reload("/");
        //!Activar la redireccion!!
      }

      const error = (data && data.message) || response.statusText;
      console.log(error);
      return Promise.reject(error);
    }

      return data;
    
  });
}

export default {
  getGames,
  getNotifications,
  getPlayers,
  getStadistics,
  getSponsors
};