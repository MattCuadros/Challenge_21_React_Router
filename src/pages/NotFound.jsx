import { Box, Container, Typography } from "@mui/material";

const NotFound=()=>{
    return (
        <Box
          className="d-flex justify-content-between"
          sx={{
            color: "black",
            width: "100vw",
            height: "80vh",
          }}
        >
          <Container className="d-flex flex-column justify-content-center text-center">
            <Typography variant="h1" component="h2">
              <span>404</span>
              <h2>La página que buscas no se ha encontrado</h2>
            </Typography>
          </Container>
        </Box>
    )
}

export default NotFound;