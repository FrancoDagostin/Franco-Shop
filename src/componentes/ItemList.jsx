import Item from "./Item"

function ItemList ({producto}) {
  return (
    <div className="container">
      <h2 className="main-title">
        Productos
      </h2>
      
      <div className="productos">
        {producto.map((prod, id) =>
        <Item producto={prod} key={id}/>)}
      </div>
    </div>
  )
}

export default ItemList