async function fetchJokes() {
    const res = await fetch ("https://v2.jokeapi.dev/joke/Programming");
    const jokes = await res.json();
    let oneJoke = jokes.joke
    if(oneJoke){
      document.getElementById("joke").innerHTML= oneJoke;  
    }else {
        document.getElementById("joke").innerHTML="Probably not a joke";  
    }  
}
fetchJokes();
