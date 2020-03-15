// Core
import React, { useEffect, useState } from 'react'

// MUI
import Grid from '@material-ui/core/Grid'

// Components
import Select from 'components/Select'
import Cards from 'components/Cards'

// Styles
import 'styles/TVShows.scss'

// Services
import { get } from 'tmdb-api'

const TVShows = ({ page, setPage }) => {
	// Init
	const categories = ['airing_today', 'on_the_air', 'popular', 'top_rated']
	const [tvShows, setTvShows] = useState({})

	// States
	const [category, setCategory] = useState('top_rated')

	// Effects
	useEffect(() => {
		get(`tv/${category}`, `&page=${page}`)
			.then(res => {
				setTvShows(res)
				setPage(res.page)
			})
			.catch(err => console.log(err))
	}, [category, page, setPage])

	return (
		<>
			<Grid className="tv-tab-content" container direction="row" justify="center">
				<Select items={categories} label="Category" onChange={setCategory} selectedItem={category} setPage={setPage} />
			</Grid>
			<Grid container direction="column">
				<Cards mediaList={tvShows} page={page} setPage={setPage} />
			</Grid>
		</>
	)
}

export default TVShows
