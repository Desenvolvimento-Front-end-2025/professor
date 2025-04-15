import { useEffect, useState } from "react"
import "./Digital.css"

const Digital = ()=>{
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [flag, setFlag] = useState(false)

    console.log("criou o componente") 

    //ele é executado somente na criação componente
    useEffect(()=>{
        console.log("executou o useEffect") 
        setInterval(() => {
                setHora( new Date().toLocaleTimeString() )            
                console.log("passou no interval")
            }, 5000);
    },[])


    const [senha, setSenha] = useState("")
    const [confSenha, setConfSenha] = useState("")
    const [msg, setMsg] = useState("")

    //é executando quando um dos estados é modificado
    useEffect(()=>{
        if (senha == confSenha){
            setMsg("senhas são iguais") 
        }else{
            setMsg("senhas são diferentes") 
        }        
    },[senha, confSenha])

    // é executado na modificação de qualquer useState
    useEffect(()=>{
       console.log("executou") 
    })

    return (
        <div className="dgtCont">
            {hora}<br />
            <button onClick={()=> setFlag(!flag) } >Pause</button> 

            <span>Senha</span>
            <input value={senha} onChange={(evt)=>setSenha(evt.target.value)}/>   
            <span>Repita a senha</span>
            <input value={confSenha} onChange={(evt)=>setConfSenha(evt.target.value)}/> 
            <span>{msg}</span> 

            <div></div>
            <div></div>
        </div>
    )
}

export default Digital