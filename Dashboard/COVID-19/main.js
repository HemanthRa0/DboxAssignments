const url = "https://reqres.in/api/users?page=2"
 const url2 = "https://covid-193.p.rapidapi.com/statistics"

const data = null;

/* const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        localStorage.setItem("CovData",this.responseText)
	}
});

xhr.open("GET", url2);
xhr.setRequestHeader("X-RapidAPI-Key", "a7cb5fcc0bmsh935f7f3e37d8051p13ee02jsn3b52d18ebe94");
xhr.setRequestHeader("X-RapidAPI-Host", "covid-193.p.rapidapi.com");

xhr.send(data);
 */
let CovData = localStorage.getItem("CovData")
CovData = JSON.parse(CovData)

async function getapi(keyword=""){   
    let data = CovData.response.filter(obj => obj.country.toUpperCase().substring(0,keyword.length) === keyword.toUpperCase())
    if(keyword === ""){
        let loc = document.getElementsByName("gridlist")
        loc[0].lastChild.innerHTML=''
        data = CovData.response  
    }
    else{
        let loc = document.getElementsByName("gridlist")
        loc[0].lastChild.innerHTML=''   
    }
    let user = data.map(ele =>{
        const div = document.createElement("div")
        div.href = ""
        div.className = "card border-0 m-5"
        div.style = "width: 18rem;"
        div.innerHTML = `
        <div class="card-body bg-info-subtle rounded-4">
        <h5 class="" rounded-4>${ele.country}</h5>
        <div class="card-title">Active cases : <h5 class="text-danger">${ele.cases.active === null?0:ele.cases.active}</h5></div>
        <h4 class="card-title">Deaths : <h5 class="text-danger">${ele.deaths.total===null?0:ele.deaths.total}</h5></h4>
        <p class="card-text">As on : ${ele.day}</p>
        
        </div>`
        return div
    })
    let loc = document.getElementsByName("gridlist")
    const grid = document.createElement("div")
    grid.className = "row ml-0 mt-0 "
    console.log(grid.className)
    user.forEach(u => {
        grid.appendChild(u)
    });
    loc[0].appendChild(grid)
}
document.addEventListener("DOMContentLoaded", function(e){

    let kword = document.getElementById("searchbar")
    kword.addEventListener("keypress", ()=>{getapi(kword.value)}, false);
    let s_btn = document.getElementById("search_btn")
    s_btn.addEventListener("click",()=>{if(kword.value==""){this.location.reload()}}, false);
    
    getapi()
})



    
    
    