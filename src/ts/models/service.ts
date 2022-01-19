export function getData() {
    fetch('https://www.omdbapi.com/?s=movie&apikey=17a69569')
  .then((res) => res.json())
  .then((data) => {
      console.log(data.Search)
      for (let i = 0; i < data.Search.length; i++) {
      let div = document.querySelector('div')
      div?.insertAdjacentHTML(
        'afterbegin',
        `<h1>${data.Search[i].Title}</h1> <img src="${data.Search[i].Poster}">`
      )
      console.log(data.Search[i])
    }
  })
}