const fetch = require("node-fetch"); // fetch

// errors are handled not here but in
// places that use getJSON using
// try/catch syntax.
module.exports = async function getJSON(url) {
  const req = await fetch(url); // fetch
  return await req.json(); // return json
};
