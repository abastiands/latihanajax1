const clickButton = () => {
    const content = document.querySelector(".content");

    content.style.display = 'block'

    fetchData()
}

const fetchData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
        method: "GET"
    })

    const json = await response.json();

    const contentName = document.querySelector(".content-name");
    const contentImage = document.querySelector(".content-image");
    const contentType = document.querySelector(".content-type");

    contentName.innerText = `${json.id}: ${json.name}`
    contentImage.innerHTML = `<img src="${json.sprites.front_default}" />`
    contentType.innerText = `Type: ${json.types[0].type.name}`
}