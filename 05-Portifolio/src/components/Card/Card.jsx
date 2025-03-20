import { useState } from "react"
import "./Card.css"

const Card = ( {titulo, cor, children } )=>{

    cor = cor || "#444"

    const [close, setClose] = useState(1)
    const canClosed = ()=>{
        setClose( close == 1? 0 : 1 )
    }
    const [open, setOpen] = useState(1)
    const changeOpen = ()=>{
        setOpen( open == 1? 0 : 1 )
    }

    return (
        <div className={(close==1)?'card':'card close'}>
            <div className="card-header"
            style={{backgroundColor: cor}}>
               <span style={{flexGrow: 1}} >{titulo}</span> 
                <span className={(open==1)?'arrow':'arrow closeArrow'}
                onClick={changeOpen}
                >▼</span>
                <span className="arrow" 
                onClick={canClosed}>❌</span>

            </div>
            <div className={(open==1)?'card-body':'card-body close'}>
               {children}
            </div>

        </div>
    )
}
export default Card