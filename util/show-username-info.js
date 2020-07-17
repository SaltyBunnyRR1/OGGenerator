module.exports = function showUsernameInfo(username) {
  if (username.length > 2 && username.length < 17) {
    console.log(`${username} - ${username.length}`);
  }
};
