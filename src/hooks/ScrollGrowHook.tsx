import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function UseScrollGrow() {
    const componentRef =useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: componentRef,
        offset: ['0 1', '1.2 1'], //start: 0, end:1
    });
    
    const scaleValue = useTransform(scrollYProgress,[0,1], [0,1])
    const opacityValues = useTransform(scrollYProgress,[0,1], [0.1,1])
    // const xValue = useTransform(scrollYProgress,[0,1], [-1000,1])

    const style = {
        scale: scaleValue,
        opacity: opacityValues,
        // x: xValue,
    }
  return {style, scaleValue, opacityValues, componentRef}
}

export default UseScrollGrow