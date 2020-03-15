// Core
import React from 'react'

// MUI
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

// Components
import Movies from 'components/Movies'
import SearchResults from 'components/SearchResults'
import TabPanel from 'components/TabPanel'
import TVShows from 'components/TVShows'

// MUI styles
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'black'
	},
	selectedTab: {
		color: theme.palette.primary.main
	},
	tabs: {
		backgroundColor: theme.palette.grey['50'],
		color: theme.palette.grey['600']
	}
}))

// Generate props for the Tabs
const a11yProps = index => ({ id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}` })

const Content = ({ currentTab, page, setPage, searchResults, searchMsg, setCurrentTab }) => {
	// Init
	const classes = useStyles()
	const tabs = [
		{ key: 'movies', display: 'Movies' },
		{ key: 'search', display: 'Search Results' },
		{ key: 'tv', display: 'TV Shows' }
	]

	// Component methods
	const handleChange = (event, newValue) => {
		setCurrentTab(newValue)
		setPage(1)
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs
					aria-label="simple tabs example"
					className={classes.tabs}
					indicatorColor="primary"
					onChange={handleChange}
					value={currentTab}
					variant="fullWidth"
				>
					{tabs.map((tab, index) => (
						<Tab
							className={index === currentTab && classes.selectedTab}
							key={tab.key}
							label={tab.display}
							{...a11yProps(tab.key)}
						/>
					))}
				</Tabs>
			</AppBar>
			<TabPanel value={currentTab} index={0}>
				<Movies page={page} setPage={setPage} />
			</TabPanel>
			<TabPanel value={currentTab} index={1}>
				<SearchResults page={page} setPage={setPage} searchResults={searchResults} searchMsg={searchMsg} />
			</TabPanel>
			<TabPanel value={currentTab} index={2}>
				<TVShows page={page} setPage={setPage} />
			</TabPanel>
		</div>
	)
}

export default Content
