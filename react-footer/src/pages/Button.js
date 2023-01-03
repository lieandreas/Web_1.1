import { useState } from "react";

const Button = ({children }) => {
  const [isReadShown, setReadShown] = useState(false);
  const toogleBtn = () => {
    setReadShown((prevState) => !prevState);
  };
  return (
    <div className="Readmore">
      {isReadShown ? children : children.substr(0, 0)}
      <button onClick={toogleBtn}>
        {isReadShown ? "Read Less" : "...Read More"}
      </button>
    </div>
  );
};

export default Button;
