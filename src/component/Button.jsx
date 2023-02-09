import React from "react";

function Button(props){
    return(
        <button className="  my-2  bg-indigo-800 text-center px-5 py-1 rounded-full hover:bg-red-600 hover:text-white duration-300 text-[white] font-serif">
        {props.name}
        </button>
    )
}

export default Button