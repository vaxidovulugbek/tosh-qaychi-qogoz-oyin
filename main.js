let elqogoz = document.querySelector("#qogoz")
let elqaychi = document.querySelector("#qaychi")
let eltosh = document.querySelector("#tosh")
let elbtngroup = document.querySelector("#btn-group")
let elScoreMe = document.querySelector("#score-me")
let elScoreKomp = document.querySelector("#score-komp")
let elimg1 = document.querySelector("#img1")
let elimg2 = document.querySelector("#img2")
let elimg3 = document.querySelector("#img3")
let elplay = document.querySelector("#play")
let elwincheck = document.querySelector("#wincheck")
let ellosecheck = document.querySelector("#losecheck")
// elS.parentElement.style

// elwincheck.style.display = "block"


// let one = 1
// let two = 2
// let three = 3
// elqogoz = one
// elqaychi = 2
// eltosh = 3

let eltext = document.querySelector("#text")

// 1dan 3gacha sonlarni random qilib chiqaradi
// eltext.textContent = Math.floor(Math.random() * 3) + 1;

let count = 0
let count2 = 0

elqogoz.addEventListener("click", () =>{
  let komp =  Math.floor(Math.random() * 3) + 1;
  // console.log(komp);
  if (komp == 1) {
    // console.log("durrang");
    elplay.textContent = "Drav"
  }
  else if (komp == 2){
    // console.log("yutqazdi");
    elScoreKomp.textContent = count+=1
    elplay.textContent = "You lose"
    if (elScoreKomp.textContent == 5) {
      elimg1.parentElement.parentElement.style.display = "none"
      elplay.textContent = "You lose"
      ellosecheck.style.display = "flex"
    }
  }
  else if (komp == 3){
    // console.log("yutdi");
    elplay.textContent = "You win"
    elScoreMe.textContent = count2+=1
    if (elScoreMe.textContent == 5) {
      elimg1.parentElement.parentElement.style.display = "none"
      elplay.textContent = "You win"
      elwincheck.style.display = "flex"
    }
  }
})

elqaychi.addEventListener("click", () =>{
  let komp =  Math.floor(Math.random() * 3) + 1;
  console.log(komp);
  if (komp == 2) {
    // console.log("durrang");
    elplay.textContent = "Drav"
  }
  else if (komp == 3){
    // console.log("yutqazdiiii");
    elScoreKomp.textContent = count+=1
    elplay.textContent = "You lose"
    if (elScoreKomp.textContent == 5) {
      elimg1.parentElement.parentElement.style.display = "none"
      elplay.textContent = "You lose"
      ellosecheck.style.display = "flex"
    }
  }
  else if (komp == 1){
    // console.log("yutdiiiii");
    elplay.textContent = "You win"
    elScoreMe.textContent = count2+=1
    if (elScoreMe.textContent == 5) {
      elimg1.parentElement.parentElement.style.display = "none"
      elplay.textContent = "You win"
      elwincheck.style.display = "flex"
    }
  }
})

eltosh.addEventListener("click", () =>{
  let komp =  Math.floor(Math.random() * 3) + 1;
  console.log(komp);
  if (komp == 3) {
    // console.log("durrang");
    elplay.textContent = "Drav"
  }
  else if (komp == 1){
    // console.log("yutqazdiiii");
    elScoreKomp.textContent = count+=1
    elplay.textContent = "You lose"
    if (elScoreKomp.textContent == 5) {
      elimg1.parentElement.parentElement.style.display = "none"
      elplay.textContent = "You lose"
      ellosecheck.style.display = "flex"
    }
  }
  else if (komp == 2){
    // console.log("yutdiiiii");
    elplay.textContent = "You win"
    elScoreMe.textContent = count2+=1
    if (elScoreMe.textContent == 5) {
      elimg1.parentElement.parentElement.style.display = "none"
      elplay.textContent = "You win"
      elwincheck.style.display = "flex"
    }
  }
})


// console.log(elScoreMe.textContent);
if (elScoreMe.textContent == 2) {
  // elimg1.parentElement.style.display = "none"
}
// agar komp qiymati 1 bolsa durrang 2 bolsa yutqazdi 3 bolsa yutdi



















