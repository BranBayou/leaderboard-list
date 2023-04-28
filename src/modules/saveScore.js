const saveScore = async (gameID, userName, score) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: userName,
        score,
      }),
    });

  const data = await response.json();
  return data;
};

export default saveScore;