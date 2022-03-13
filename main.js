

/* Moralis init code */
const serverUrl = "https://lxtuxzfhp7ii.usemoralis.com:2053/server";
const appId = "UyVl8w7yfrMdIyqGjWM3aiAprhGM56Nnwo6P0MPu";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({ signingMessage: "Log in to DefiNinja DEX" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console(error);
        });
    }
  }
  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }

  document.getElementById("btn-login").onclick = login;
  document.getElementById("btn-logout").onclick = logOut;