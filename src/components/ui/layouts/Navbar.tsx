import { NavLink } from 'react-router-dom'
import { Button } from '../button'
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.header className='h-16  w-full fixed bg-white z-[999]'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay:1, duration:1 }}
    >
        <nav className=' w-full max-w-[1230px] mx-auto  h-full flex items-center justify-between px-[20px]'>
            <span>iRepair</span>
            <ul className='space-x-4'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <Button>
                    <NavLink to={'/login'}>Login</NavLink>
                </Button>
            </ul>
        </nav>
    </motion.header>
  )
}

export default Navbar