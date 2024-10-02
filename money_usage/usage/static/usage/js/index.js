document.addEventListener("DOMContentLoaded", () => {
  var income = document.querySelector("#all-income").innerHTML;

  //document.write(str);
  document.querySelector("#json").innerHTML = JSON.parse(JSON.parse(income))[0][
    "fields"
  ]["income"];
});
