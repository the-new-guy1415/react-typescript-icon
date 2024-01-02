import React from "react";

type Props = {};

function Spinner({}: Props) {
  return (
    <div className="border-4 animate-spin border-t-myBlue w-5 h-5 rounded-full "></div>
  );
}

export default Spinner;
