// let x = [];
// let newState = x.push("Female");
// console.log(newState);
function getApiData() {
  return new Promise(function (resolve) {
    setTimeout(() => resolve("TimeOut Called!"), 2000);
  });
}
async function asyncTimeout() {
  let info = await getApiData();
  console.log(info);

  console.log("Await calleed");
}
asyncTimeout();
// await myPromise().then((result) => console.log(result));
console.log("outsider called!");
