// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function getUser() {
  try {
    const getJohn = await getJohnProfile();
    console.log(getJohn);
  } catch (error) {
    console.log(error);
  }
}

getUser();
