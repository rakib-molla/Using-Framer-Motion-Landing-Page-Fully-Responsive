import { getServices } from "@/api/admin/services/services.api";
import { useQuery } from "@tanstack/react-query";

const ServiceList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  if (isLoading) {
    return <p>Loading..........</p>;
  }
  if(isError){
  return <p>something wrong </p>
  }

  return (
    <div>
      {data?.map((item, i) => (
        <h1 key={i}>{item?.name}</h1>
      ))}
    </div>
  );
};

export default ServiceList;
