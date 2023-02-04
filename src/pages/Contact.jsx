import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact(){

    const [name,setName]=useState("");
    const [mail,setMail]=useState("");
    const [comment, setComment]=useState("");


const handleSubmit=(e)=>{
    e.preventDefault();

    if(name==="" || mail==="" || comment===""){
        Swal.fire({
            title: 'Faltan Datos',
            text: 'Por favor, completa todos los campos para poder registrar tus comentarios',
            icon: 'error',
            confirmButtonText: 'Volver'
          })
          return;
    } else{

        Swal.fire({
            title: '¡Gracias!',
            text: 'Por tus Comentarios',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
    
        setName("");
        setMail("");
        setComment("");
    
        return;
    }

}

    return(
        <>
        <Box
          className="d-flex justify-content-between"
          sx={{
            color: "black",
            width: "100vw",
            height: "80vh",
          }}
        >
            <Container>
                <Typography variant="h3">
                <p className="text-center m-2">Cuéntanos, ¿en qué te podemos ayudar?</p>
                </Typography>
                <form action="" className="form-control" onSubmit={handleSubmit}>
                    <label htmlFor="" className="form-label">Tu Nombre:</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <label htmlFor="" className="form-label">Tu Email:</label>
                    <input type="email" className="form-control" value={mail} onChange={(e)=>{setMail(e.target.value)}}/>
                    <label htmlFor="" className="form-label">Comentario:</label>
                    <textarea name="" id="" cols="30" rows="10" className="form-control" value={comment} onChange={(e)=>{setComment(e.target.value)}}></textarea>
                    <button type="submit" className="btn btn-success form-control my-2">Enviar</button>
                </form>
            </Container>
        </Box>
            

        </>
    )
}