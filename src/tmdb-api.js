import axios from 'axios'

const get = (endpoint, params = '') =>
	axios
		.get(`${endpoint}?api_key=5d75b7418bfa66678dff63f2088ede84${params}`)
		.then(res => res.data)
		.catch(err => err)

export { get }
