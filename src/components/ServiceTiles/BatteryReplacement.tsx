
import { motion,} from 'framer-motion';
import UseScrollGrow from "@/hooks/ScrollGrowHook";

function BatteryReplacement() {
  const {style, componentRef} = UseScrollGrow();

  return (
    <motion.div className="bg-red-500 h-[415px] rounded-lg col-span-12"
    style={style}
    ref={componentRef}
    ></motion.div>
  )
}

export default BatteryReplacement