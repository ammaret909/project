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
    div.classList.add('light')

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
    div2.classList.add('text-white')
    div2.innerText = `${movies.title}`
    pageHome.appendChild(div)

    div1.addEventListener('dblclick',function() {
        let cf = confirm(`ต้องการถูกใจ ${movies.title} หรือไม่`)
        if(cf){
            hideAll()
            pLike.style.display = 'flex'
            addToData(movies)
        }
    })
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

//Like
function addPageLike(moviesLike){
    const pageLike = document.getElementById('pageLike')
    let div = document.createElement('div')
    let divImg = document.createElement('div')
    let divName = document.createElement('div')
    let div2 = document.createElement('div')
    let divIcon = document.createElement('div')
    let divDetails = document.createElement('div')
    let divDelete = document.createElement('div')
    let divScore = document.createElement('div')
    let image = document.createElement('img')

    let button = document.createElement('button')
    let button1 = document.createElement('button')

    div = document.createElement('div')
    div.classList.add('card')
    div.classList.add('col-xl-4')
    div.classList.add('col-lg-6')
    div.classList.add('col-md-12')
    div.classList.add('light')

    div.appendChild(divImg)
    divImg.classList.add('d-flex')
    divImg.classList.add('justify-content-center')
    divImg.classList.add('m-3')
    divImg.appendChild(image)
    image.setAttribute('src',`${moviesLike.image_url}`)
    image.classList.add('h-auto')
    image.classList.add('w-auto')

    div.appendChild(divScore)
    divScore.classList.add('d-flex')
    divScore.classList.add('justify-content-center')
    divScore.classList.add('m-3')
    divScore.classList.add('text-oreng')
    divScore.innerHTML=`Score ${moviesLike.score} / 10`
    
    div.appendChild(div2)
    div2.classList.add('d-flex')
    div2.classList.add('justify-content-center')
    div2.classList.add('col-12')

    div2.appendChild(divIcon)
    divIcon.classList.add('bi')
    divIcon.classList.add('bi-heart-fill')
    divIcon.classList.add('d-flex')
    divIcon.classList.add('justify-content-center')
    divIcon.classList.add('align-items-center')
    divIcon.classList.add('col-3')
    divIcon.classList.add('text-white')

    div2.appendChild(divDetails)
    divDetails.classList.add('col-3')
    divDetails.classList.add('d-flex')
    divDetails.classList.add('justify-content-center')
    divDetails.appendChild(button)
    button.classList.add('btn')
    button.classList.add('bg-oreng')
    button.classList.add('text-white')
    button.setAttribute('type','submit')
    button.setAttribute('id','details')
    button.innerText='Details'
    button.addEventListener('click', function () {
        showDetailFlex(moviesLike)
    })

    div2.appendChild(divDelete)
    divDelete.classList.add('col-3')
    divDelete.classList.add('d-flex')
    divDelete.classList.add('justify-content-center')
    divDelete.appendChild(button1)
    button1.classList.add('btn')
    button1.classList.add('bg-oreng')
    button1.classList.add('text-white')
    button1.setAttribute('type','submit')
    button1.setAttribute('id','delete')
    button1.innerText='Delete'
    button1.addEventListener('click', function (e) {
        e.stopPropagation()
        let text = `Delete ${moviesLike.title}`;
        if (confirm(text)) {
            deleteMovieLike(moviesLike.id)
        }
    })

    div.appendChild(divName)
    divName.classList.add('d-flex')
    divName.classList.add('justify-content-center')
    divName.classList.add('text-center')
    divName.classList.add('text-white')
    divName.innerText = `${moviesLike.title}`
    pageLike.appendChild(div)
}

function likeMovie(movieData){
    console.log(movieData)
        fetch('https://se104-project-backend.du.r.appspot.com/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        }).then(respond => {
            if (respond.status === 200) {
                return respond.json()
            }
            else {
                throw Error(respond.statusText)
            }
        }).then(data => {
            console.log('success', data)
            showAllMoviesLike()
        }).catch(error => {
            return null
        })
}

function addToData(movies){
    let movieAdd = {}
    movieAdd.id = '333'
    movieAdd.movie = {
        'image_url' : movies.images.jpg.image_url,
        'url' : movies.url,
        'title' : movies.title,
        'rated' : movies.rating,
        'type' : movies.type,
        'episodes' : movies.episodes,
        'score' : movies.score,
        'synopsis' : movies.synopsis
    }
    likeMovie(movieAdd)
}

function showAllMoviesLike(){
    fetch('https://se104-project-backend.du.r.appspot.com/movies/333')
    .then(response => {
        return response.json()
    }).then(data => {
        addMovieLike(data)
    })
}

function addMovieLike(movieLink){
    const pageLike = document.getElementById('pageLike')
    pageLike.innerHTML=''
    for(movie of movieLink){
        addPageLike(movie)
    }
}

//deteils
function detailShow(detailData) {
    console.log(detailData)
    let image_urlShow = document.getElementById('image_url')
    image_urlShow.setAttribute('src', detailData.image_url)
    let titleShow = document.getElementById('title')
    titleShow.innerText = detailData.title
    let scoreShow = document.getElementById('score')
    scoreShow.innerHTML = detailData.score
    let episodesShow = document.getElementById('episodes')
    episodesShow.innerHTML = detailData.episodes
    let ratedShow = document.getElementById('rated')
    ratedShow.innerHTML = detailData.rated
    let synopsisShow = document.getElementById('synopsis')
    synopsisShow.innerHTML = detailData.synopsis
    document.getElementById('back').addEventListener('click',(event) => {
        hideAll()
        pLike.style.display = 'flex'
        showAllMoviesLike()
    })
}
function showDetailFlex(dataD) {
    hideAll()
    pDetei.style.display = 'flex'
    detailShow(dataD)
}

//Delete
function deleteMovieLike(id) {
    fetch(`https://se104-project-backend.du.r.appspot.com/movie?id=333&&movieId=${id}`, {
        method: 'DELETE'
    }
    ).then(respond => {
        if (respond.status === 200) {
            return respond.json()
        } else {
            throw Error(respond.statusText)
        }
    }).then(data => {
        alert(`Movie ${data.title} is now deleted`)
        showAllMoviesLike()
    }).catch(error => {
        alert('failed')
    })
}

//hide and show
function onLoad(){
    hideAll()
}

var pHome = document.getElementById('pageHome')
var pSearch = document.getElementById('pageSearch')
var pLike = document.getElementById('pageLike')
var pDetei = document.getElementById('deteilShow')

var pBar = document.getElementById('carouselExampleCaptions')
function showBar(){
    pBar.style.display = 'flex'
}

function hideAll(){
    const pageHome = document.getElementById('pageHome')
    pageHome.innerHTML=''

    pSearch.style.display = 'none'

    pLike.style.display = 'none'
    pDetei.style.display = 'none'
    pBar.style.display = 'none'
}

document.getElementById('home').addEventListener('click',(event) => {
    hideAll()
    showBar()
    showAllMovies()
})

document.getElementById('searchButton').addEventListener('click',(event) => {
    hideAll()
    let input = document.getElementById('searchBar').value
    pSearch.style.display = 'flex'
    searchAnime(input)
})

document.getElementById('like').addEventListener('click',(event) => {
    hideAll()
    pLike.style.display = 'flex'
    showAllMoviesLike()
})

window.addEventListener('load',function(){
    showBar()
    showAllMovies()
})

