import { Box } from "@mui/system"
import { NavLink } from "react-router-dom"

export default function Article(){
    return(
        <>
            <Box
            className="d-flex justify-content-between"
            sx={{
                color: "1f1f1f",
                width: "100vw",
                height: "30vh",
            }}
            >
            <div className="d-flex flex-column align-items-center justify-content-center w-100">
                <p className="text-center">¿Quieres reservar el mejor Pastel para tu evento?</p>
                <NavLink className="text-decoration-none btn btn-danger w-25" to="/contact">Reserva</NavLink>
                <div className="m-3 w-75 bg bg-danger"></div>
            </div>
            </Box>
        </>
    )
};