export const getServices = async () => {
 return await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
};


