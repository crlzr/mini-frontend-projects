async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

    const array = data.filter((object) => {
      const city = object.address.city[0] === "G";
      return city;
    });
    console.log(array);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchData();
