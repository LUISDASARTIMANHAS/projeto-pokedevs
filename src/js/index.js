function getPokedevsData() {
  const url = "./src/data/pokedevs.json";
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.text().then((errorText) => {
          throw new Error("Erro ao obter banco de dados: " + errorText);
        });
      }
    })
    .then((data) => {
      renderPokedevs(data);
    })
    .catch((error) => onErrorHostname(error));

  function onError(error) {
    console.debug(error);
  }
}
getPokedevsData();

function renderPokedevs(database) {
  console.log(database);
}
