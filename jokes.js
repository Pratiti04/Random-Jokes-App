const joke1 = document.getElementById('abc');
const getjoke = document.getElementById('generate');

getjoke.addEventListener('click', generatejoke);

generatejoke();

async function generatejoke() {

    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokep = await jokeRes.json();

    console.log(jokep);

    joke1.innerHTML = jokep.joke;
}

function myfunction() {

    window.getSelection().selectAllChildren(document.getElementById("abc"));
    document.execCommand("copy");
    alert("Text copied to clipboard");

}