import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section error-page'>
      <div className='error-container'>
        <h1>Oops! Página não encontrada!</h1>
        <Link to='/' className='btn btn-primary'>
          Voltar para o início
        </Link>
      </div>
    </section>
  )
}

export default Error
