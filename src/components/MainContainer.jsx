import React from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useCollection } from "../hooks/useCollection";
import HomeContainer from "./HomeContainer";

const MainContainer = () => {
  const { documents } = useCollection("foodItems");

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-orange-500 transition-all ease-in-out duration-100">
            Our Fresh & healthy fruits
          </p>

          <div className="hidden md:flex items-center gap-3">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 flex rounded-lg hover:bg-orange-500 bg-orange-400 cursor-pointer transition-all duration-100 ease-in-out items-center justify-center"
            >
              <MdChevronLeft className="text-2xl text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 flex rounded-lg hover:bg-orange-500 bg-orange-400 cursor-pointer transition-all duration-100 ease-in-out items-center justify-center"
            >
              <MdChevronRight className="text-2xl text-white" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContainer;
