import axios, { AxiosInstance } from 'axios'

import getEnvVars from '../../environment'

const { yelpApiKey } = getEnvVars()

const yelp: AxiosInstance = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${yelpApiKey}`
  }
})

export default yelp
