const url = "https://reqres.in/api/users?page=2"
/* const url2 = 'https://imdb-top-100-movies.p.rapidapi.com/'

const data = null;

const xhr = new XMLHttpRequest();
//xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        localStorage.setItem("ImdbData",this.responseText)
	}
});

xhr.open("GET", url2);
xhr.setRequestHeader("X-RapidAPI-Key", "a7cb5fcc0bmsh935f7f3e37d8051p13ee02jsn3b52d18ebe94");
xhr.setRequestHeader("X-RapidAPI-Host", "imdb-top-100-movies.p.rapidapi.com");

xhr.send(data); */

let ImdbData = localStorage.getItem("ImdbData")
ImdbData = JSON.parse(ImdbData)
console.log(ImdbData)

async function getapi(url){
    var data = await (await fetch(url)).json()
    //console.log(data.data)
    let user = data.data.map(ele =>{
        const div = document.createElement("div")
        div.href = ""
        div.className = "card border-0 m-5"
        div.style = "width: 16rem;"
        div.innerHTML = `
            <img src="${ele.avatar}" class="card-img-top" alt="...">
            <div class="card-body bg-info-subtle rounded-4">
                <h5 class="card-title">${ele.first_name} ${ele.last_name}</h5>
                <p class="card-text">${ele.email}</p>
            </div>`
       return div
    })
    //console.log(user)
        let loc = document.getElementsByName("gridlist")
        //console.log(loc)
        const grid = document.createElement("div")
        grid.className = "row ml-0 mt-0 "
        console.log(grid.className)
        user.forEach(u => {
            grid.appendChild(u)
        });
        loc[0].appendChild(grid)
}
document.addEventListener("DOMContentLoaded", function(e){
    getapi(url)
    
})





