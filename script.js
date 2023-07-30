const URL = 'https://randomfox.ca/floof/'
const mainImage = document.querySelector('.image-block img')
const btn = document.querySelector('.btn')
const loader = document.querySelector('.loader')
const history = document.querySelector('.history')

// function getFox(api) {
//     return fetch(api).then(response => response.json())
// }

// getFox(URL).then(fox => {
//     console.log(fox)
// })

async function getFox() {
    btn.classList.add('disabled')
    loader.style.opacity = '1'
    const response = await fetch(URL)
    const fox = await response.json()
    const {image} = fox
    mainImage.src = image
    const historyImg = document.createElement('img')
    historyImg.src = image
    history.prepend(historyImg)
}

getFox()

btn.addEventListener('click', getFox)

mainImage.addEventListener('load', () =>{
    loader.style.opacity = '0'
    btn.classList.remove('disabled')
})

history.addEventListener('click', (e) => {
    const img = e.srcElement.src
    mainImage.src = img
})