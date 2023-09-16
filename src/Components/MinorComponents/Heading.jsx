import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className=" pb-6 font-sans text-[var(--text-color)] text-4xl font-bold flex-wrap ">
      {heading}
    </div>
  );
};

export default Heading;
