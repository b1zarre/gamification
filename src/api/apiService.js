export const fetchNews = () =>
  fetch("https://2ca4-178-155-5-2.eu.ngrok.io/game/external/v1/news/list", {
    method: "POST",
    body: JSON.stringify({ page: 1, offset: 20 }),
    headers: {
      "Content-Type": "application/json",
    },
  });
