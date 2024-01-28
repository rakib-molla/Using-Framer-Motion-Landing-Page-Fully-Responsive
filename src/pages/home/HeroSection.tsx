import { Button } from "@/components/ui/button"
import Container from "@/components/ui/layouts/Container"
import macBookExpose from "@/assets/images/macbook-exposed.png";
 import { motion } from "framer-motion"
function HeroSection() {
    const intro = {
        hidden:{opacity: 0},
        visible:{opacity: 1,
            transition: {
            duration: 0.5,
            staggerChildren: 0.25,
            delayChildren: 1,
        }}
    }
    const introChildren ={
        hidden:{opacity: 0, y: -200},
        visible:{opacity: 1,y: 0,
            transition: {
            duration: 0.5,
            type:'spring',bounce:0.6,
        }}
    }
    const laptop = {
        initial:{y: 0, rotate:0, scale: 5},
        animate:{
            y:20,
            rotate: -30,
            scale:1,
            transition:{
                duration: 1,
                ease: 'linear',
                y:{duration: 2,
                repeat: Infinity,
                repeatType:'reverse',
                ease:'easeInOut',
            }
            }
        }
    }
  return (
    <div className="overflow-hidden"> 
    <Container className="grid grid-cols-1 lg:grid-cols-2 place-content-center pt-16 h-screen">
        <motion.div
        initial='hidden'
        variants={intro}
        animate='visible'
        
        >
            <motion.h1 className="text-5xl lg:text-8xl font-bold text-nowrap"
            variants={introChildren}
            ><span className="text-gray " style={{color: '#D4D8DD'}}>Don't worry,</span>
            <br />
           <span>We'll fix it.</span>
           </motion.h1>
            <motion.p style={{color: '#777E8A'}} className="mt-10 mb-5 max-w-[50ch]"
            variants={introChildren}
            >
                Welcome to <span className="text-black font-bold">iRepair</span>, your one-stop place for all kinds of <span className="text-black font-bold">MackBook repairs</span> and diagnostics.
            </motion.p>
            <motion.div
            variants={introChildren}
            > 
            <Button>Book A Service</Button>
            </motion.div>
        </motion.div>
      <motion.div className=" mt-10 w-3/4 lg:w-full mx-auto"
      initial='initial'
      animate='animate'
      variants={laptop}
      >
        <img className=" h-[95%] object-contain" src={macBookExpose} alt="macBook expose images" />
      </motion.div>
    </Container>
    </div>
  )
}

export default HeroSection