import React from 'react'
import { useEffect } from 'react'

function Nosotros() {
    
  const clickear = () => {
    console.log('click')
  }


  useEffect(() => {
    window.addEventListener('click', clickear)

    return ( /*EN EL RETURN DEL USEEFFECT SE PONE LO QUE SE QUIERE ELIMINAR AL DESMONTAR EL ELEMENTO */
      window.removeEventListener('click', clickear)
    )
  }, [])
  

  return (
    <div className='container'>
      <h1 className='main-title'>Nosotros</h1>
      <p>Página de 'Nosotros'</p>
    </div>
  )
}

export default Nosotros