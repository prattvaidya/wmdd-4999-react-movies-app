// Core
import React, { useEffect, useRef, useState } from 'react'

// MUI
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import MUISelect from '@material-ui/core/Select'

// MUI styles
const useStyles = makeStyles(theme => ({
	formControl: {
		marginLeft: theme.spacing(1),
		minWidth: 200
	},
	searchType: {
		textAlign: 'center'
	}
}))

const Select = ({ items, label, onChange: handleItemChange, selectedItem, setPage }) => {
	// Init
	const classes = useStyles()
	const inputLabel = useRef(null)

	// States
	const [labelWidth, setLabelWidth] = useState(0)

	// Effects
	useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth)
	}, [])

	// Component methods
	const handleChange = event => {
		handleItemChange(event.target.value)
		setPage(1)
	}

	return (
		<FormControl variant="outlined" className={classes.formControl}>
			<InputLabel ref={inputLabel} id="select-dd-label">
				{label}
			</InputLabel>
			{selectedItem && (
				<MUISelect
					labelId="select-dd-label"
					id="select-dd"
					className={classes.searchType}
					value={selectedItem}
					onChange={handleChange}
					labelWidth={labelWidth}
				>
					{items.map(item => (
						<MenuItem value={item} key={item}>
							{item}
						</MenuItem>
					))}
				</MUISelect>
			)}
		</FormControl>
	)
}

export default Select
