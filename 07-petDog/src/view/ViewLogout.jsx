import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"
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