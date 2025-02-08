function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data retrieved from the server.");
    }, 4000);
  });
}

async function getUserData() {
  try {
    const data = await fetchData();
    console.log(data);
    console.log("Remaining task can be executed here.");
  } catch (error) {
    console.log(error);
  }
}

getUserData();
