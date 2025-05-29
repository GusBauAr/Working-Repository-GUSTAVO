import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const formData ={
    email:'',
    password:'',
    displayName:'',
  }

  const formValidations ={
    email:[(value) => value.includes('@'), 'el email debe de tener @'],
    password:[(value) => value.length >= 6, 'el password debe de tener mas de 6 letras'],
    displayName:[(value) => value.length >=1, 'el nombre es obligatorio'],
  }

  const dispatch = useDispatch();

  const {formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);


  const onsubmit = (event) =>{
    event.preventDefault();
    setFormSubmitted(true)

    if(!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }




  return (
    <AuthLayout title="Crear cuenta">
      <h1>formvalid {isFormValid ?'valido' : 'incorrecto' }</h1>
      <form onSubmit={onsubmit}>
        <Grid container>
          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre Completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              

            />
          </Grid>

          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item size={{ xs: 12}}>
                <Button type="submit" variant="contained" fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>

              
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" size={12}>
            <Typography sx={{mr: 1 }}>Ya tiene cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
