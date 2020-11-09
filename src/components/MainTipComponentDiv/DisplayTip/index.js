import React, { useEffect, useState } from "react";

function DisplayTip({ tip }) {
  const [value, setValue] = useState(tip);

  useEffect(() => {
    console.log(tip);
    setValue(tip);
  }, [tip]);

  // console.log("text: " + tip);
  return <p>{value}</p>;
}

export default DisplayTip;
