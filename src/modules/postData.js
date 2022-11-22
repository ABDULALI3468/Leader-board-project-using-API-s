const postData = async (obj) => {
  const content = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M34398fsnvkkjbjfjis/scores/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: obj.name,
      score: obj.score,
    }),
  });
  const afterContent = await content.json();
  return afterContent;
};

export default postData;
