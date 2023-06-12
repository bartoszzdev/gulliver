import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { data } from './assets/data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [destinos, setDestinos] = useState([])

  const fetchDestinos = useCallback(() => {
    setLoading(true)

    try {
      let destinos = data;

      destinos = destinos.filter(destino => {
        return destino.titulo.toLowerCase().startsWith(searchTerm.toLowerCase())
      })

      if (destinos) {
        const newDestinos = destinos.map(destino => {
          const { id, titulo, imagem, distancia, preco} = destino

          return {
            id,
            titulo,
            imagem,
            distancia,
            preco
          }
        })

        setDestinos(newDestinos)
      } else {
        setDestinos([])
      }

      setLoading(false)
    }
    catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [searchTerm])

  useEffect(() => {
    fetchDestinos() 
  }, [searchTerm, fetchDestinos])

  return (
    <AppContext.Provider 
      value={{
        loading, destinos, setSearchTerm
      }}
    >
      {children}
    </AppContext.Provider>
  ) 
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
