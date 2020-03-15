// Core
import React from 'react'
import PropTypes from 'prop-types'

// MUI
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const TabPanel = ({ children, value, index, ...other }) => (
	<Typography
		component="div"
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other}
	>
		{value === index && <Box p={3}>{children}</Box>}
	</Typography>
)

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
}

export default TabPanel
