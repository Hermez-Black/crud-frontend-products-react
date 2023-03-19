import * as React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';

export default function ProductsForm({
  showModal,
  closeModalFunc,
  createProductAction,
  dataToUpdateProduct,
  updateProductAction,
  methodSetProductSelected}) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    if (dataToUpdateProduct != null) {
      reset(dataToUpdateProduct);
    }
  }, [dataToUpdateProduct])
  

  const handleClose = () => {
    closeModalFunc();
    emptyform();
    methodSetProductSelected(null);
  }

  const onValidCallback = (data) => {
    if (dataToUpdateProduct != null) {
      updateProductAction(data);
    } else {
      createProductAction(data);
    }
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
          <Button onClick={handleSubmit(onValidCallback)}>{
            dataToUpdateProduct != null ? "Actualizar" : "Crear"
          }</Button>
        </DialogActions>
        </form>
        </DialogContent>
      </Dialog>
  );
}
