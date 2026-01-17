async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    console.log(data);

    const total = data.reduce((result, object) => {
      return result + object.id;
    }, 0);
    console.log(total);
  } catch (error) {
    console.log("Error");
  }
}

fetchData();
