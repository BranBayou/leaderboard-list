let gameID = 'Zl4d7IVkemOTTVg2f100';
const gameName = 'API game';
const baseURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";

const newGame = async () => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'API game',
    }),
  });

  const data = await response.json();
  return data;
};

newGame(gameName).then((id) => {
  gameID = id;
  console.log(`New game "${gameName}" created with ID ${gameID}`);
});

export {gameID, baseURL, newGame};