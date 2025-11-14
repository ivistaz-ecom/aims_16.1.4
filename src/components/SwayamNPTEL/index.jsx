import React from "react";
import SwayamNPTEL from "./SwayamNPTEL";
import Content from "./Content";
import ReadyToDraw from "../shared/ReadyToDraw";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";
import Contact from "./Contact";

const index = () => {
  return (
    <>
      <SwayamNPTEL />
      <Content />
      <ReadyToDraw
        title="Here are a few resources that will help you in enrolling courses online:"
        subtitle={false}
        swayamText="Swayam"
        nptelText="NPTEL"
        primaryButtonText={false}
        tertiaryButtonText={false}
        secondaryButtonText={false}
        
      />
      <Contact />
    </>
  );
};

export default index;
