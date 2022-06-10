function addPageHome(index,movies){
    const pageHome = document.getElementById('pageHome')
    let div = document.createElement('div')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let image = document.createElement('img')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    // cell.setAttribute('scope','row')
    // cell.innerHTML = index
    // row.appendChild(cell)
    // cell = document.createElement('td')
    // cell.innerHTML = `${movies.title} ` //${movies.surname}
    // row.appendChild(cell)
    // cell = document.createElement('td')
    // cell.appendChild(div)
    // div.appendChild(image)
    // image.setAttribute('src',movies.image_url)
    // image.classList.add('img-thumbnail')
    // image.style.width = '150px'
    // row.appendChild(cell)
    // cell = document.createElement('td')
    // // cell.innerHTML = movies.gender
    // row.appendChild(cell)
    // pageHome.appendChild(row)

    // pageHome.append(div)
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
    image.setAttribute('src',`${movies.images.jpg.image_url}`)//
    image.classList.add('h-auto')
    image.classList.add('w-auto')
    

    div.appendChild(div2)
    div2.classList.add('d-flex')
    div2.classList.add('justify-content-center')
    div2.classList.add('text-center')
    div2.innerText = `${movies.title}`
    pageHome.appendChild(div)

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

function showAllMovies(){
    fetch('https://api.jikan.moe/v4/anime?page=2')
    .then(response => {
        return response.json()
    }).then(data => {
        addMovieList(data)
    })
}

function addMovieList(movieList){
    let counter = 1
    const pageHome = document.getElementById('pageHome')
    pageHome.innerHTML=''
    for(movie of movieList.data){
        addPageHome(counter++,movie)
    }
}

var pHome = document.getElementById('pageHome')

document.getElementById('home').addEventListener('click',(event) => {
    showAllMovies()
})

window.addEventListener('load',function(){
    showAllMovies()
})
