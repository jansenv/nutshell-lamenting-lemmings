const contentTarget = document.querySelector(".ads")

export const ads = () => {

    const render = () => {
        
        contentTarget.innerHTML = `
        <img src="imgs/steve-ad.png">
        <img src="imgs/mo-ad.png">
        `
    }
    
    render()

}