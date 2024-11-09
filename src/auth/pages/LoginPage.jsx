import { Button, Grid2, TextField, Typography, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid2 container spacing={2}>

          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              autoComplete="current-password"
              placeholder="correo@gmail.com"
              fullWidth
            />
          </Grid2>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              autoComplete="current-password"
              placeholder="contraseña"
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button variant="contained" fullWidth>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid2>
          <Grid2 container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear nueva cuenta
            </Link>
          </Grid2>

        </Grid2>
      </form>
    </AuthLayout>
  )
}
