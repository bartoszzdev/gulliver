import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { data } from '../assets/data'

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [destino, setDestino] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)

    const novoDestino = data.find(destino => destino.id === id)
    setDestino(novoDestino)

    setLoading(false)
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!destino) {
    return <h2 className='section-title'>Não há informações</h2>
  }

  const { titulo, imagem, tipo, descricao, preco, distancia, comodidades } = destino

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Voltar ao início
      </Link>

      <h2 className='section-title'>{titulo}</h2>
      <div className='drink'>
        <img src={imagem} alt={titulo} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {titulo}
          </p>
          <p>
            <span className='drink-data'>categoria :</span>
            {tipo}
          </p>
          <p>
            <span className='drink-data'>descrição :</span>
            {descricao}
          </p>
          <p>
            <span className='drink-data'>preço :</span>
            {preco}
          </p>
          <p>
            <span className='drink-data'>distância :</span>
            {distancia}
          </p>
          <p>
            <span className='drink-data'>comodidades :</span>
             {/*  <ul> */}
                {comodidades.map((item,index) => {
                  return (
                    item ? <li key={index}>{item}</li> : null
                  )
                })}
              {/* </ul> */}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
