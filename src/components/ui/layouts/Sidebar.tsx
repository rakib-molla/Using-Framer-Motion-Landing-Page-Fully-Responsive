import { cn } from "@/lib/utils"
import { LayoutDashboard } from "lucide-react"
import { NavLink } from "react-router-dom"



function Sidebar() {
  return (
    <aside className="bg-[#eeececd2] h-screen col-span-2 sticky top-0 left-0 overflow-auto p-4 lg:p-5 ">
        <nav className="flex flex-col gap-2">
            <NavLink 
            className={({isActive})=> cn('rounded-md p-3 bg-[#bdbcbc] hover:bg-[#818181] hover:text-white transition-all truncate flex items-center  gap-3',
            {
                'bg-[#2211bdd2] text-white': isActive
            }
            )}
             to={'/admin/dashboard'}>
            <LayoutDashboard className="shrink-0"/> <span className="truncate">Dashboard</span>
            </NavLink>

            
            <NavLink 
            className={({isActive})=> cn('rounded-md p-3 bg-[#bdbcbc] hover:bg-[#818181] hover:text-white transition-all truncate flex items-center  gap-3',
            {
                'bg-[#2211bdd2] text-white': isActive,
            }
            )}
             to={'/admin/service-list'}>
            <LayoutDashboard className="shrink-0"/> <span className="truncate">Service List</span>
            </NavLink>
            
            <NavLink 
            className={({isActive})=> cn('rounded-md p-3 bg-[#bdbcbc] hover:bg-[#818181] hover:text-white transition-all truncate flex items-center  gap-3',
            {
                'bg-[#2211bdd2] text-white': isActive
            }
            )}
             to={'/admin/add-service'}>
            <LayoutDashboard className="shrink-0"/> <span className="truncate">Add Service</span>
            </NavLink>
        </nav>
    </aside>
  )
}

export default Sidebar