let btn = document.getElementById("btn");
let facts = document.getElementById("facts");
let apiUrl ="https://catfact.ninja/fact";

btn.onclick = ()=>{
    fetch(apiUrl,{
        headers :{
            Accept: 'application/json',
            'User-Agent': 'My Library'
        }
    }).then(
        (responce)=>{
            return responce.json();
        }
    ).then(
        (data)=>{
            facts.innerHTML +=`<li> ${data.fact}</li>`
        }
    )
}