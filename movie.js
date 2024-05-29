const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



  let movieslist = document.body.querySelector(".movieslist")
  let movieslist2 = document.body.querySelector(".movieslist2")
  let heading = document.body.querySelector(".heading")
  
  
 heading.firstElementChild.addEventListener('mouseover',()=>{
   heading.firstElementChild.nextElementSibling.style.display='block'
  })
  movieslist.addEventListener('mouseout',()=>{
    heading.firstElementChild.nextElementSibling.style.display='none'
  })
  
  
  const fetchdata = async (api) => {
    let response = await fetch(api);
    let data = await response.json();
    display(data.results,data);
  };
  let count =2
  fetchdata(APIURL);
  fetchdata(APIURL+count++);
  
  
  function display(data,data2)
  {
    data.forEach((e,i)=>{
      let img  = document.createElement('img')
      img.classList="movieicons";
      img.src=`${IMGPATH + data[i].poster_path}`;
      movieslist.append(img);
      
    }) 
  }
  
  function hover()
  {
    movieslist.addEventListener('mouseover',(e)=>{
      
      if(e.target.classList=='movieicons')
        {
          console.log(e.target)
        }
      

    })
}

hover()



  let save = document.body.querySelector(".save")

save.addEventListener('click',()=>{
  location.href='fourth.html'
})




