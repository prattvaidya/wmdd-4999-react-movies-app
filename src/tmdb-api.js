import axios from 'axios'

const get = (endpoint, params = '') =>
	axios
		.get(`${endpoint}?api_key=${process.env.REACT_APP_TMDB_API_KEY}${params}`)
		.then(res => res.data)
		.catch(err => err)

export { get }
