const users = document.querySelector(".users")
const ulList = document.querySelector(".ulList")

async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!response.ok) {
        throw new Error("not ok");
    }
    let data = await response.json()
    if (!data) {
        throw new Error("no Data")
    }

    for (person of data) {
        const listElement = document.createElement("li");
        listElement.textContent = `
        Name: ${person.name} Email: ${person.email} City: ${person.city} `
        ulList.append(listElement)

    }
    console.log(data);
}

getUsers();