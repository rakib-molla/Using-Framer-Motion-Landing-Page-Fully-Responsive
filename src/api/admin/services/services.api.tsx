export const getServices = async () => {
  const response =  await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
  if(!response.isSuccess
){
   throw new Error('Something Went Wrong');
}
};


