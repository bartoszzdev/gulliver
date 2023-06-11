import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, titulo, imagem, distancia, preco }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={imagem} alt={titulo} />
      </div>

      <div className='cocktail-footer'>
        <h3>{titulo}</h3>
        <h4>{preco}</h4>
        <p>{distancia}</p>

        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          Saiba mais
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
