import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

export default function Product({
  productData: { id, name, category, price, isAvailable },
  deleteProduct,
  updateProduct
}) {
  const styleButton = {
    height: 55,
    width: 0,
    padding: "0px !important",
    marginLeft: 1
  };

  const styleTitle = {
    fontSize: 30,
  };

  const styleText = {
    fontSize: 13,
    color: "grey"
  };

  const styleButtonRed = {
    ...styleButton,
    backgroundColor: "#DD4747"
  }

  const styleIcons = { fontSize: 30, padding: 0 };

  return (
    <div>
      <Card>
        {/* <Card.Img></Card.Img> */}
        <Card.Body>
          <div style={{ textAlign: "left" }}>
            <Card.Title style={styleTitle}>
              { name }
            </Card.Title>
            <Card.Text style={styleText}>
              Categoria:&nbsp;
              { category }
              <br />
              Precio:&nbsp;
              { price }
              <br />
              Disponible:&nbsp;
              { isAvailable ?
                <TaskAltOutlinedIcon color="success" sx={styleIcons} />
                : <ClearOutlinedIcon color="error" sx={styleIcons} /> }
            </Card.Text>
          </div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
            <Button
              variant="contained"
              color="error"
              size="small"
              sx={styleButtonRed}
              onClick={() => deleteProduct(id)}
              >
              <DeleteForeverOutlinedIcon />
            </Button>
            <Button
              variant="outlined"
              sx={styleButton}
              onClick={() => updateProduct({ id, name, category, price, isAvailable })}>
              <CreateOutlinedIcon />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
