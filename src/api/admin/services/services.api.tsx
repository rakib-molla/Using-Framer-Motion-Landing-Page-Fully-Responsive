export const getServices = async () => {
  const response =  await fetch("https://jsonplaceholder.typicode.com/users0").then((res) =>
    res.json()
  );
  if(!response.success){
   throw new Error('Something Went Wrong');
}
};


