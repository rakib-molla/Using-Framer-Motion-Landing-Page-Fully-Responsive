import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react"

function AddService() {
  const[serviceName, setServiceName] = useState('');
  const handleSubmit = (e: FormEvent)=>{
    e.preventDefault();
    const serviceData ={
      name: serviceName,
      description: 'Description',
      device:['mackbook', 'Apple', 'Android'],
      price: 500.0
    }
    console.log(serviceData)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="border" type="text" onChange={(e)=> setServiceName(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default AddService