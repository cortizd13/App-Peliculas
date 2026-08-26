import { useSearchParams } from "react-router-dom"

export function useFilters () {
  const [ searchParams, setSearchParams ] = useSearchParams()

  const currentGenre = searchParams.get('genre') ?? 'All Genres'
  const currentTitle = searchParams.get('title') ?? ''

    const handleFilter = (key:string,value:string) => {
      const nextParams = new URLSearchParams(searchParams)

      if(value) {
        nextParams.set(key, value)
      } else {
        nextParams.delete(key)
      }

      setSearchParams(nextParams)
    }

  return { currentGenre, handleFilter, currentTitle }

}