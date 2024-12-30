import React from "react"

const Button = (props) => {
    const { text, func } = props;
  return (
    <button onClick={func} className="px-8 py-4 rounded-lg border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-100 mx-auto">
        <p>{text}</p>
    </button>
  )
};

export default Button;
