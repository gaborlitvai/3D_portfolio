import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] " //shadow-card - árnyékolás
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-transparent border-2 border-[#03D394] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-black-200 text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mi az a holostep?</p>
        <h2 className={styles.sectionHeadText}>Mit érhet el velünk?</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p>A holostep.io csapataként valljuk, hogy a jövő az interaktivitásban rejlik. </p>
        <p className="mt-3">
          Szolgáltatásaink segítségével a 3D-s termékmegjelenítéssel webshopját
          új szintre emelheti, miközben piaci előnyhöz juthat.
        </p>
        <p>
          Platformunk segítségével a modellek megjelenítése gyerekjáték,
          ráadásul modellkészítőt sem kell felkutatnia – ezt a területet is
          lefedjük Önnek.
        </p>
        {/* <p className="mt-3">
          Köszöntjük a jövő világában, köszöntjük a holostep.io-nál!
        </p> */}
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
