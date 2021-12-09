import React from "react";

const Qualitie = ({color, name, _id})=>{

    const classColor=(color)=>`badge bg-${color}`

    return(
        <span className={classColor(color)}>{name}</span>
    )

}

export default Qualitie