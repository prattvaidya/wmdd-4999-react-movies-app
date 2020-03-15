// Core
import React, { useState } from 'react'

// MUI
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

// Components
import Select from 'components/Select'

// Services
import { get } from 'tmdb-api.js'

// Styles
import 'styles/SearchForm.scss'

// MUI styles
const useStyles = makeStyles(theme => ({
	formControl: {
		marginLeft: theme.spacing(1),
		minWidth: 200
	},
	searchBox: {
		width: 400
	},
	searchBtn: {
		minWidth: 'unset',
		alignSelf: 'center'
	}
}))

const SearchForm = ({ onSubmit: handleSubmit, onErr: handleErr, page, setCurrentTab, setPage }) => {
	// Init
	const classes = useStyles()
	const searchTypes = ['multi', 'movie', 'tv']

	// States
	const [searchKeyword, setSearchKeyword] = useState('')
	const [type, setType] = useState('multi')

	const handleChange = event => {
		setSearchKeyword(event.target.value)
		if (event.target.value.length > 0) handleErr('Please initiate a Search')
		else handleErr('Please enter a Search')
	}

	const search = () => {
		if (searchKeyword.length === 0) handleErr('Please enter a Search')
		else {
			get(`search/${type}`, `&query=${encodeURI(searchKeyword)}&page=${page}`)
				.then(res => {
					handleSubmit(res)
					if (res.length === 0) handleErr('Sorry, there were no results')
					else {
						handleErr('')
						setPage(res.page)
						setCurrentTab(1)
					}
				})
				.catch(err => console.log(err))
		}
	}

	return (
		<div className="search-form">
			{/* Search box */}
			<FormControl className={[classes.formControl, classes.searchBox]}>
				<TextField
					id="search-keywords"
					label="Search"
					variant="outlined"
					value={searchKeyword}
					onChange={handleChange}
				/>
			</FormControl>

			{/* Search Type dropdown */}
			<Select items={searchTypes} label="Search Type" onChange={setType} setPage={setPage} selectedItem={type} />

			{/* Search Button */}
			<FormControl className={[classes.formControl, classes.searchBtn]}>
				<Button variant="contained" color="primary" onClick={search}>
					Search
				</Button>
			</FormControl>
		</div>
	)
}

export default SearchForm
