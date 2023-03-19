import * as React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';

export default function ProductsForm({showModal, closeModalFunc, createProductAction}) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleClose = () => {
    closeModalFunc();
    emptyform();
  }

  const onValidCallback = (data) => {
    console.log(data);
    createProductAction(data);
    emptyform();
  }

  const emptyform = () => {
    reset({
      name: "",
      category: "",
      price: "",
      isAvailable: false
    });
  };

  const availableValues = [
    {
      value: true,
      label: "Sí"
    },
    {
      value: false,
      label: "No"
    }
  ];

  return (
      <Dialog open={showModal} onClose={handleClose}>
        <DialogTitle>Nuevo Producto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Antes de crear un producto asegurate de que este disponible
            y que sus caracteristicas esten integras y correctamente registradas,
            gracias.
          </DialogContentText>
          <form onSubmit={handleSubmit(onValidCallback)}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre del producto"
              type="text"
              fullWidth
              variant="standard"
              {...register("name")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="category"
              label="Categoria"
              type="text"
              fullWidth
              variant="standard"
              {...register("category")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="price"
              label="Precio $"
              type="text"
              fullWidth
              variant="standard"
              sx={{
                marginBottom: 5
              }}
              {...register("price")}
            />
            <TextField
              id="isAvailable"
              select
              label="¿Esta disponible?"
              defaultValue={false}
              helperText="Recuerda revisar el inventario"
              {...register("isAvailable")}
            >
            {availableValues.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit(onValidCallback)}>Crear</Button>
        </DialogActions>
        </form>
        </DialogContent>
      </Dialog>
  );
}
