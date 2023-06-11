import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { loading, destinos } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  if (destinos.length < 1) {
    return <h2 className='section-title'>
      Não há hospedagens para você
    </h2>
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Hospedagens</h2>

      <div className='cocktails-center'>
        {destinos.map(destino => {
          return (
            <Cocktail key={destino.id} {...destino} />
          )
        })}
      </div>
    </section>
  )
}

export default CocktailList
