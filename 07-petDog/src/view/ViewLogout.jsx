import { useAuth } from "../context/AuthProvider"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

const ViewLogout = (  )=>{

    let navigate = useNavigate();

    const {logout} = useAuth()

    useEffect(()=>{
        logout()
        navigate("/")

    })

    return(
       <>
       </>
    )
}

export default ViewLogout