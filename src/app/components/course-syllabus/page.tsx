"use client";
import Image from "next/image";
import { useState } from "react";
import Inner from "./inner-syllabus/page";

const CourseSyllabusPage = ({ courseModule }: any) => {
  const [toggleSylabbus, setToggleSyllabus] = useState("");

  const syllabus = (value: any) => {
    toggleSylabbus === value ? setToggleSyllabus("") : setToggleSyllabus(value);
  };
  return (
    <Inner
      toggleSylabbus={toggleSylabbus}
      syllabus={syllabus}
      courseModule={courseModule}
    />
  );
};
export default CourseSyllabusPage;
