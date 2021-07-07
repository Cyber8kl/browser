const search = document.getElementById("search");
const btn = document.getElementById("btn");

window.onload = () => {
    document.documentElement.style.backgroundColor = localStorage.getItem("color")
}

btn.onclick = ()=>{
    if(search.value.substring(0,4) == "http"){
        window.open(search.value, "_self")
    } else {
        window.open(`https://www.google.com/search?q=${search.value}`, "_self")
    }
}

document.getElementById("form").onsubmit = (e)=>{
    e.preventDefault();
    if (search.value.substring(0, 4) == "http") {
        window.open(search.value, "_self")
    } else {
        window.open(`https://www.google.com/search?q=${search.value}`, "_self")
    }
}

document.getElementById("color").onchange = ()=>{
    document.documentElement.style.backgroundColor = document.getElementById("color").value;

    localStorage.setItem("color", document.getElementById("color").value);
}

document.getElementById("customize").onclick = ()=>{
    document.querySelector(".custom").classList.toggle("visible")
}