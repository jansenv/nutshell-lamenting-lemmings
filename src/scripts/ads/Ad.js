// Authored by: Willy Metcalf

import { useAds } from "./adsDataProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".ADS")






export const Ad = ()=>{
  eventHub.addEventListener("click", e=>{
    if(e.target.classList.contains("AdImage")){
const adArray = useAds()
let oldNumber = parseInt(e.target.id,10)
let number = ""
if(oldNumber=== adArray.length){
  number = 1
}else{
  number = oldNumber + 1
}


let selectedAd = adArray.find(AD=>AD.id === number)

  renderAd(selectedAd)
    }
  })

  eventHub.addEventListener("userLoggedIn", e=>{
    const adArray = useAds()
let randomNumber = Math.floor(Math.random() * adArray.length) + 1;

let selectedAd = adArray.find(AD=>AD.id === randomNumber)
  renderAd(selectedAd)
  })
eventHub.addEventListener("userLoggedOut", e=>{
  contentTarget.innerHTML=""
})


const renderAd=(ad)=>{
contentTarget.innerHTML = `<img id="${ad.id}" class="AdImage" src="${ad.img}">`
}
}