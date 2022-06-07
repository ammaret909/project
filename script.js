function addPageHome(movies){
    const pageHome = document.getElementById('pageHome')
    let div = document.createElement('div')
    let image = document.createElement('img')
    div = document.createElement('div')
    div.classList.add('card')
    div.classList.add('col-xl-4')
    div.classList.add('col-lg-6')
    div.classList.add('col-md-12')
    div = document.createElement('div')
    div.classList.add('d-flex')
    div.classList.add('justify-content-center')
    div.classList.add('m-3')
    div.appendChild(image)
    image.setAttribute('src',`movies.image_url`) //
    image.classList.add('h-100')
    image.classList.add('w-75')
    image.setAttribute('alt',`${movies.title}`) //
    div = document.createElement('div')
    div.classList.add('pb-0')
    div.classList.add('d-flex')
    div.classList.add('justify-content-center')
    innerHTML = `${movies.title}` //
    console.log('2')
}

function showAllMovies(){
    fetch('https://se104-project-backend.du.r.appspot.com/movies')
    .then((response) => {
        return response.json()
    }).then(data => {
        addMovieList(data)
    })
}

function addMovieList(movieList){
    const pageHome = document.getElementById('pageHome')
    pageHome.innerHTML=''
    for(movie of movieList){
        addPageHome(movie)
    }
}

function onLoad(){
    hideAll()
}

var pDetails = document.getElementById('deteilShow')
var pHome = document.getElementById('pageHome')

function hideAll(){
    pDetails.style.display='none'
}

document.getElementById('details').addEventListener('click',(event) => {
    hideAll()
    pDetails.style.display='block'
})

document.getElementById('home').addEventListener('click',(event) => {
    hideAll()
    pHome.style.display='block'
    console.log('1')
    showAllMovies
})