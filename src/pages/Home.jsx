import { Box, Container, Typography } from "@mui/material";
import Article from "../assets/components/Article";

const Home=()=>{
    return (
      <>
        <Box
          className="d-flex justify-content-between"
          sx={{
            color: "1f1f1f",
            width: "100vw",
            height: "80vh",
          }}
        >
          <Container className="d-flex flex-column justify-content-center text-center">
            <h1>
              Bienvenido a <strong className="brand-text-1 display-4">Happy Cake</strong>
            </h1>
            <p>El lugar de los pasteles felices</p>
            <Typography variant="h1" component="h2">
              <span>🎂</span>
            </Typography>
          </Container>
        </Box>
        <Article/>
      </>
    )
}

export default Home;