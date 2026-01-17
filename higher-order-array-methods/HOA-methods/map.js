async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);

    const newArray = data.map((object) => {
      const cities = object.address.city.toUpperCase();
      return cities;
    });
    console.log(newArray);
  } catch (error) {}
}

fetchData();
