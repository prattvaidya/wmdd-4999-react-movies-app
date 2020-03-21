// Core
import React from 'react'

// MUI
import Grid from '@material-ui/core/Grid'

// Components
import Cards from './Cards'

const SearchResults = ({ page, setPage, searchResults, searchMsg }) => {
	return searchMsg.length === 0 ? (
		<Grid container direction="column">
			<Cards mediaList={searchResults} page={page} setPage={setPage} />
		</Grid>
	) : (
		<Grid container direction="row" justify="center">
			<h2>{searchMsg}</h2>
		</Grid>
	)
}
export default SearchResults
