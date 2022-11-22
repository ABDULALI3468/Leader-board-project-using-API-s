const getData = async () => {
  const request = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M34398fsnvkkjbjfjis/scores/");
  const data = await request.json();
  data.result.sort((a, b) => {
    return b.score - a.score;
  });
  const getContent = async (data) => {
    data.result.forEach((board) => {
      document.querySelector(".scoreList").innerHTML += `
              <li class="eachScore">${board.user} : ${board.score}</li>
          `;
    });
  };
  getContent(data);
};

export default getData;
