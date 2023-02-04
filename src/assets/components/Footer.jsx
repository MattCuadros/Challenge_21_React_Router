import { Box } from "@mui/material";

export default function Footer() {
    return (
        <>
            <Box
                className="d-flex justify-content-center align-items-center"
                sx={{
                    color: "white",
                    width: "100vw",
                    height: "10vh",
                    backgroundColor: "gray",
                    
                }}
            >
                <p>Todos los derechos reservados ©</p>
            </Box>
        </>
    )
}