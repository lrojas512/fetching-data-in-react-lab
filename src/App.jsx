import { useState, useEffect } from 'react'
import './App.css'
import * as StarshipService from "./services/starshipService"
import StarshipSearch from './components/StarshipSearch/StarshipSearch'
import StarshipList from './components/StarshipList/StarshipList'

function App() {
  const [starship, setStarship] = useState([])
  const [displayStarship,setDisplayStarship] = useState([])
  const [loading,setLoading] =useState(true)

  useEffect(() => {
    const fetchStarships = async () => {
      try{
        const data = await StarshipService.index()
        setStarship(data)
        setDisplayStarship(data)
      } catch(error){
        console.log(error)
      } finally{
        setLoading(false)
      }
    }

    fetchStarships()
  }, [])

  const handleSearch = (searchTerm) => {
    const filtered = starship.filter((ship) => 
      ship.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setDisplayStarship(filtered)
  }

  const resetSearch = () => {
    setDisplayStarship(starship)
  }

  if(loading) return <h1>Loading...</h1>

  return (
    <>
    <StarshipSearch 
    resultCount = {displayStarship.length}
    onSearch = {handleSearch}
    onReset = {resetSearch}
    isFiltered = {displayStarship.length !== starship.length}
    />

    <StarshipList starship={displayStarship} />
    </>
  )
}

export default App
