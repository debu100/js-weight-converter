document.querySelector("#output").classList.add("output-visibility");
document.querySelector("#lbsinput").addEventListener("input", function (e) {
  let pounds = e.target.value;
  document.querySelector("#output").classList.remove("output-visibility");
  //   console.log(pounds);
  document.querySelector("#gramsoutput").innerHTML = (
    pounds / 0.0022046
  ).toFixed(2); //maths that will convert pounds to grams.
  document.querySelector("#kilogramsoutput").innerHTML = pounds / 2.2046;
  document.querySelector("#ouncesoutput").innerHTML = pounds * 16;
});
