import { useState } from 'react'


const StarshipSearch = ({ resultCount, onSearch, onReset, isFiltered}) => {
    const [searchTerm,setSearchTerm] = useState('')
    const [prevSearchTerm, setPrevSearchTerm] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        onSearch(searchTerm)
        setPrevSearchTerm(searchTerm)
        setSearchTerm('')
    }
  return (
    <section>
        <p>
            <strong>{resultCount}</strong> results
        </p>
        <p>
        {prevSearchTerm ? `Last search: "${prevSearchTerm}"` : 'Search for a starship by name. '}
        </p>

        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={searchTerm}
            placeholder='Enter starship name'
            onChange= {(event) => setSearchTerm(event.target.value)}
             />
             <button type="submit">Search</button>
        </form>

        {isFiltered && (
            <button onClick = {onReset}>Show all starships</button>
        )}
    </section>
  )
}

export default StarshipSearch