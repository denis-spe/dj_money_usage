document.addEventListener("DOMContentLoaded", () => {
    var income = document.querySelector("#all-income").innerHTML
    var json = JSON.parse(income.replace(/[\[\]]/g, ""))
    console.log(json)
})