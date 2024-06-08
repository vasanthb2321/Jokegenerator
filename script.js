const jokeContainer=document.getElementById("joke");
const btn = document.getElementById("btn");
const url= "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.innerText = `${item.joke}`;
        })
        .catch(error => console.error('Error fetching the joke:', error));
}
btn .addEventListener("click",getJoke);
getJoke();