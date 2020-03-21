// Core
import React, { useState } from 'react'

// Components
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Content from './components/Content'

// Style imports
import './styles/App.scss'

function App() {
	// States (These states have to be here as the Search Results will be passed from SearchForm to the children on Content)
	const [currentTab, setCurrentTab] = useState(0)
	const [searchMsg, setSearchMsg] = useState('Please enter a search')
	const [searchResults, setSearchResults] = useState({})
	const [page, setPage] = useState(1)

	return (
		<div className="App">
			<Header />
			<SearchForm
				onSubmit={setSearchResults}
				onErr={setSearchMsg}
				page={page}
				setCurrentTab={setCurrentTab}
				setPage={setPage}
			/>
			<Content
				currentTab={currentTab}
				page={page}
				setPage={setPage}
				searchMsg={searchMsg}
				searchResults={searchResults}
				setCurrentTab={setCurrentTab}
			/>
		</div>
	)
}

export default App
