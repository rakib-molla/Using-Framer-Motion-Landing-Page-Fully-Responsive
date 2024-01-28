import UseScrollGrow from "@/hooks/ScrollGrowHook"
import { motion } from 'framer-motion';

function DataRecovery() {
    const {style, componentRef} = UseScrollGrow();
  return (
    <motion.div className="bg-red-500 h-[415px] rounded-lg col-span-6 lg:col-span-7"
    style={style}
    ref={componentRef}
    ></motion.div>
  )
}

export default DataRecovery