function myOwnSetTimeout(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}

const ans = myOwnSetTimeout(5000);

ans.then(function () {
  console.log("Hello");
});
