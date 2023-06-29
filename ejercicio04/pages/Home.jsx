import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { Searchbar } from '../components/Searchbar'

export const Home = () => {
  const myRequest = new Request('./public/assets/lentes.json')
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  useEffect(() => {
    fetch(myRequest)
      .then((response) => {
        return response.json()
      }).then((glasses) => {
        console.log(glasses)
        setData(glasses)
      }).catch((error) => {
        console.error(error)
      })
  // Las comillas invertidas `` son para meter pedazos de codigo de javascript a un string. haciendo que el string tenga una parte dinámica
  }, [])

  return (
    <div className='container'>
      <Searchbar handleSearchChange={handleSearchChange} />
      <div className='row'>
        {
        filteredData.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))
      }
      </div>
    </div>
  )
}
export default Home
