import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid container direction='column' spacing={2}>
      {/* Fila superior con fecha y botón */}
      <Grid item container direction='row' justifyContent='space-between' alignItems='center'>
        <Grid item>
          <Typography fontSize={39} fontWeight='light'>
            24 de mayo 2025
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>
      </Grid>

      {/* Input debajo */}
      <Grid item>
        <TextField
          type='text'
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label='Título'
          sx={{ border: 'none', mb: 1}}
        />
        <TextField
          type='text'
          variant="filled"
          fullWidth
          multiline
          placeholder="que sucedio hoy???"
          minRows={5}
        />
      </Grid>
      {/* image gallery */}
      <ImageGallery/>
    </Grid>
  );
}