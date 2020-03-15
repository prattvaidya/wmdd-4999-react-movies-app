// Core
import React, { useEffect, useState } from 'react'

// MUI
import Grid from '@material-ui/core/Grid'

// Components
import Select from 'components/Select'
import Cards from 'components/Cards'

// Styles
import 'styles/Movies.scss'

// Services
import { get } from 'tmdb-api'

const Movies = ({ page, setPage }) => {
	// Init
	const categories = ['now_playing', 'popular', 'top_rated', 'upcoming']

	// States
	const [category, setCategory] = useState('popular')
	const [movies, setMovies] = useState({})

	// Effects
	useEffect(() => {
		get(`movie/${category}`, `&page=${page}`)
			.then(res => {
				console.log('Movies', res)
				setMovies(res)
				setPage(res.page)
			})
			.catch(err => console.log(err))
	}, [category, page, setPage])

	return (
		<>
			<Grid className="movies-tab-categories" container direction="row" justify="center">
				<Select items={categories} label="Category" onChange={setCategory} selectedItem={category} setPage={setPage} />
			</Grid>
			<Grid container direction="column">
				<Cards mediaList={movies} page={page} setPage={setPage} />
			</Grid>
		</>
	)
}

export default Movies
