const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const fetchTheData = async (api) => {
  let respone = await fetch(api);
  let data = await respone.json();
  showmovie(data.results);
  console.log(data.results)
};
fetchTheData(APIURL);
let moviebox = document.body.querySelector("#movie-box");
const showmovie = (data) => {
  moviebox.innerHTML = "";
  data.forEach((items) => {
    let box = document.createElement("div");
    box.classList = "box";
    box.innerHTML = `
    <img src="${IMGPATH + items.poster_path}" alt=""/>
    <div class="overlay">
    <div class="title">
    <h2>${items.title}</h2>
    <span>${items.vote_average}</span>
    </div>
    <h3>Overview:</h3>
    <p>${items.overview}</p>
    </div>
    `;
    moviebox.append(box);
  });
};

let input = document.body.querySelector("#search");
input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    if (input.value != "") {
      fetchTheData(SEARCHAPI + input.value);
    }
  } else {
    fetchTheData(APIURL);
  }
});



let list = document.body.querySelectorAll(".list")
let count=11;
list.forEach((e)=>{
  e.addEventListener('click',(items)=>{
    if(items.target.innerText=='Next')
    {
      fetchTheData(APIURL+count++)
      // console.log(APIURL+count++)
      
    }
    else{
      fetchTheData(APIURL+items.target.innerText)

    }
  })
})
