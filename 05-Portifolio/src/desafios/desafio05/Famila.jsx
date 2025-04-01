import React from "react";
import "./Famila.css";

const Familia = ( {sobrenome, children} )=>{
    return(
        <fieldset>
            <legend>Familia {sobrenome}</legend>

            {
            children.map( (m)=>{
                let newMembro = React.cloneElement(m, {sobreNome : sobrenome})
                return newMembro
                }
             )
            }
        </fieldset>
    )
}

export default Familia