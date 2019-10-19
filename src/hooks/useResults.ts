import { useEffect, useState } from 'react'

import yelp from '../API/yelp'


export default (): [(searchTerm: string) => Promise<void>, any[], string] => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Wrocław'
        }
      })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessage('Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('fries')
  }, [])

  return [searchApi, results, errorMessage]
}
