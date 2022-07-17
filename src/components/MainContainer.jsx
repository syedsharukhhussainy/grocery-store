import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useCollection } from "../hooks/useCollection";
import HomeContainer from "./HomeContainer";
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";

const MainContainer = () => {
  const { documents, error } = useCollection("foodItems");

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue]);

  const handleScroll = (behaviour) => {
    if (behaviour === "right") {
      let scrollV = scrollValue + 30;
      setScrollValue((prevState) => prevState + scrollV);
    } else {
      let scrollV = scrollValue + 30;
      setScrollValue((prevState) => prevState - scrollV);
    }
  };
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />

      <section className="w-full mt-14 lg:mt-7 mb-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-orange-500 transition-all ease-in-out duration-100">
            Our Fresh & healthy fruits
          </p>

          <div className="hidden md:flex items-center sm:mt-2 gap-3">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 flex rounded-lg hover:bg-orange-500 bg-orange-400 cursor-pointer transition-all duration-100 ease-in-out items-center justify-center"
              onClick={() => handleScroll("left")}
            >
              <MdChevronLeft className="text-2xl text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 flex rounded-lg hover:bg-orange-500 bg-orange-400 cursor-pointer transition-all duration-100 ease-in-out items-center justify-center"
              onClick={() => handleScroll("right")}
            >
              <MdChevronRight className="text-2xl text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          flag={true}
          foodItems={documents}
          scrollValue={scrollValue}
        />
      </section>

      <MenuContainer />
    </div>
  );
};

export default MainContainer;
