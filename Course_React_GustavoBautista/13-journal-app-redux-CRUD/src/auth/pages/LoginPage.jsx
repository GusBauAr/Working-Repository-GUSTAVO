import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";

const formDate = {
  email:'gustavo@google.com',
    password:'123456',
}
export const LoginPage = () => {

  const {status, errorMessage } = useSelector(state =>state.auth); //useSelector

  // console.log("Status actual:", status);

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm(formDate)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  //creamos una funcion
  const onSubmit = ( event ) =>{
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password}));
  }

  //botton de google
  //creamos una constante
  const onGoogleSignIn = () =>{
    console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn());
  }



  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className='animate__animated animated__fadeIn animate__faster'> 
        <Grid container>
          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
            />
            <Grid container>
              <Grid item size={{ xs: 12}} display={ !! errorMessage ? '': 'none'}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item size={{ xs: 12, sm: 6 }}>
                <Button disabled={isAuthenticating} variant="contained" fullWidth onClick={onGoogleSignIn }>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" size={12}>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
