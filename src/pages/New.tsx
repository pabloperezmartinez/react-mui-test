import { Box, Container, TextField, Typography } from "@mui/material";
import RichTextEditor from "../components/RichTextEditor";

const NewPage: React.FC = () => {
    return (
        <Container>
            <Box mb={6}>
                <Typography variant='h3'>
                    Ingreso de oferta académica
                </Typography>
            </Box>
            <form>
                <Box mb={6}>
                    <TextField fullWidth id="title" label="Título" />
                </Box>
                <Box mb={6}>
                    <RichTextEditor 
                        placeholder="Ingrese el contenido aquí..." 
                        label="Descripción" 
                        helperText="Ingrese la descripción completa de la oferta académica."
                    />
                </Box>
            </form>
        </Container>
    );
}

export default NewPage;