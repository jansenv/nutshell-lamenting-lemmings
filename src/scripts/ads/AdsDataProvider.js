let Ads = []

export const useAds = () => Ads.slice()

export const getAds = () => fetch("http://localhost:3000/ads")
    .then(res => res.json())
    .then(parsedAds => {
        console.log(parsedAds)
        return Ads = parsedAds})