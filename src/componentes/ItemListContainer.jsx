import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirData"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer (){

  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;


  useEffect(() => {
    pedirDatos()
        .then((response) => {
          if (categoria) {
            setProductos( response.filter((prod) => prod.categoria === categoria));
          } else {          
            setProductos(response);
          }
        })
  }, [categoria])


  return (
    <div>
      <ItemList producto={productos}/>
    </div>
  )
}

export default ItemListContainer