// fetch
const fetch = require("node-fetch");
// util
const getJSON = require("./util/get-json");
const showUsernameInfo = require("./util/show-username-info");

// giving credit where credit is due ;)
console.log(
  "Made by SaltyBunnyRR1#5600 on Discord. Forked by zane-programs on GitHub"
);
// wrapped in async for async/await purposes
setInterval(async () => {
  // grab just one word from the random word API
  const username = await getJSON(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  try {
    // get user profile data
    const userProfileReq = await fetch(
      `https://api.mojang.com/users/profiles/minecraft/${username}`
    );
    if (userProfileReq.status === 204) showUsernameInfo(username[0]);
  } catch (e) {
    // TODO: improve error handling
    console.error(e);
    // showUsernameInfo(username);
  }
}, 1000);
