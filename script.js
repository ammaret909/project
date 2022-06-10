//Dom M
function addPageHome(movies){
    const pageHome = document.getElementById('pageHome')
    let div = document.createElement('div')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let image = document.createElement('img')

    div = document.createElement('div')
    div.classList.add('card')
    div.classList.add('col-xl-4')
    div.classList.add('col-lg-6')
    div.classList.add('col-md-12')

    div.appendChild(div1)
    div1.classList.add('d-flex')
    div1.classList.add('justify-content-center')
    div1.classList.add('m-3')

    div1.appendChild(image)
    image.setAttribute('src',`${movies.images.jpg.image_url}`)
    image.classList.add('h-auto')
    image.classList.add('w-auto')
    

    div.appendChild(div2)
    div2.classList.add('d-flex')
    div2.classList.add('justify-content-center')
    div2.classList.add('text-center')
    div2.innerText = `${movies.title}`
    pageHome.appendChild(div)

    div1.addEventListener('dblclick',function() {
        let cf = confirm(`ต้องการถูกใจ ${movies.title} หรือไม่`)
        if(cf){
            
        }
    })

    // div.classList.add('card')
    // div.classList.add('col-xl-4')
    // div.classList.add('col-lg-6')
    // div.classList.add('col-md-12')
    // div = document.createElement('div')
    // div.classList.add('d-flex')
    // div.classList.add('justify-content-center')
    // div.classList.add('m-3')
    // div.appendChild(image)
    // image.classList.add('h-100')
    // image.classList.add('w-75')
    // image.setAttribute('src',`${movies.image_url}`)
    // div = document.createElement('div')
    // div.classList.add('pb-0')
    // div.classList.add('d-flex')
    // div.classList.add('justify-content-center')
    // innerHTML = `${movies.title}`
}

//Add
function showAllMovies(){
    fetch('https://api.jikan.moe/v4/anime?page=2')
    .then(response => {
        return response.json()
    }).then(data => {
        addMovieList(data)
    })
}

function addMovieList(movieList){
    const pageHome = document.getElementById('pageHome')
    pageHome.innerHTML=''
    for(movie of movieList.data){
        addPageHome(movie)
    }
}

//Search
function searchAnime(input){
    fetch(`https://api.jikan.moe/v4/anime?q=${input}&sfw`)
    .then(response => {
        return response.json()
    }).then(data => {
        addSearchMovie(data)
    })
}

function addSearchMovie(movieSearch){
    const pageSearch = document.getElementById('pageSearch')
    pageSearch.innerHTML=''
    for(movieS of movieSearch.data){
        addPageHome(movieS)
    }
}

// function onLoad(){
//     hideAll()
// }

var pHome = document.getElementById('pageHome')
// var pSearch = document.getElementById('pageSearch')

// function hideAll(){
//     pHome.style.display = 'none'
// }

document.getElementById('home').addEventListener('click',(event) => {
    // hideAll()
    pHome.style.display = 'flex'
    showAllMovies()
})

document.getElementById('searchButton').addEventListener('click',(event) => {
    // const pageHome = document.getElementById('pageHome')
    // pageHome.innerHTML=''
    let input = document.getElementById('searchBar').value
    searchAnime(input)
})

window.addEventListener('load',function(){
    showAllMovies()
})

