import { useState } from "react";

import ItemCount from "./ItemCount"

export default function ItemDetail({item}) {
  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad-1)
    }
    
  }

  const handleAgregar = () => {
    console.log( {...item, cantidad} )
  }


  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo}/>
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categroia">Categoria: {item.categoria}</p>
          <p className="precio">${item.precio}</p>
          <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={handleAgregar}/>
        </div>
      </div>
    </div>
  )
}

