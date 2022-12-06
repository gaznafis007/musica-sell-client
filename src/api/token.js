export const setToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch("https://musica-sell-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("musicToken", data.token);
    });
};
