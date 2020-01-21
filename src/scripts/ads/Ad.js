import { useAds } from "./adsDataProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".ADS")






export const Ad = ()=>{
  eventHub.addEventListener("click", e=>{
    if(e.target.classList.contains("AdImage")){
const adArray = useAds()
let randomNumber = Math.floor(Math.random() * 3) + 1;

console.log("adNumber", randomNumber)

let selectedAd = adArray.find(AD=>AD.id === randomNumber)
console.log(selectedAd)
  renderAd(selectedAd)
    }
  })

  eventHub.addEventListener("userLoggedIn", e=>{
    const adArray = useAds()
let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log("adNumber", randomNumber)
let selectedAd = adArray.find(AD=>AD.id === randomNumber)
  renderAd(selectedAd)
  })
eventHub.addEventListener("userLoggedOut", e=>{
  contentTarget.innerHTML=""
})


const renderAd=(ad)=>{
contentTarget.innerHTML = `<img CLASS ="AdImage"src="${ad.img}">`
}
}