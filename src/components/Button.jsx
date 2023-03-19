import Button from "@mui/material/Button";

export default function ButtonCreateProduct({newProductAction}) {
  return (
    <Button
      onClick={newProductAction}
      variant="contained"
      color="secondary"
      sx={ {height: "4vh", backgroundColor: "#6B61A2 "} }>
      + Crear nuevo product
    </Button>
  );
}
