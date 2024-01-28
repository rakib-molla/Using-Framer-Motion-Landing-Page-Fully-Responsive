import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement"
import ChipsetReplacement from "@/components/ServiceTiles/ChipetReplacement"
import DataRecovery from "@/components/ServiceTiles/DataRecovery"
import Container from "@/components/ui/layouts/Container"

const ServicesSection = () => {
  return (
    <Container className="my-40">
        <div className="text-center flex flex-col justify-between  items-center">
        <h1>Services that we provide.</h1>
        <p className="max-w-[80ch] mt-10 mb-20">All our technicians are fully qualified and licensed. Moreover, they are incredible skillful and proficient in various aspects of computer repair.</p>
        </div>

        <div className="grid grid-cols-12 gap-10">
            <BatteryReplacement/>
            <ChipsetReplacement/>
            <DataRecovery/>
            <div className="bg-red-500 h-[415px] rounded-lg col-span-12"></div>
            <div className="bg-red-500 h-[415px] rounded-lg col-span-12 md:col-span-6 lg:col-span-4"></div>
            <div className="bg-red-500 h-[415px] rounded-lg  col-span-12 md:col-span-6 lg:col-span-4"></div>
            <div className="bg-red-500 h-[415px] rounded-lg col-span-12 lg:col-span-4"></div>
        </div>
    </Container>
  )
}

export default ServicesSection