// Core
import React from 'react'

// MUI
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import MUICard from '@material-ui/core/Card'
import Pagination from '@material-ui/lab/Pagination'
import Typography from '@material-ui/core/Typography'

// MUI Styles
const useStyles = makeStyles({
	container: {
		margin: '1rem 3rem',
		display: 'flex',
		flexDirection: 'row'
	},
	media: {
		minWidth: 200,
		height: 300,
		backgroundSize: 'contain'
	},
	mediaContent: {
		textAlign: 'center'
	}
})

const Cards = ({ mediaList, page, setPage }) => {
	// Init
	const classes = useStyles()
	console.log(mediaList)

	// Component methods
	const handleChange = (event, value) => {
		setPage(value)
		window.scrollTo(0, 0)
	}

	return (
		<>
			{mediaList.results &&
				mediaList.results.map((media, index) => (
					<MUICard className={classes.container} key={index}>
						<CardMedia
							className={classes.media}
							image={`${process.env.REACT_APP_TMDB_POSTER_BASE_URL}${media.poster_path}`}
							title="Poster"
						/>
						<Grid container direction="column" justify="center" align="center">
							<CardContent className={classes.mediaContent}>
								<Typography gutterBottom variant="h5" component="h2">
									{media.original_title || media.original_name}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Release Date: {media.release_date || 'undefined'} | Popularity: {media.popularity}
								</Typography>
							</CardContent>
							<CardContent>
								<Typography align="left" variant="body2" color="textSecondary" component="p">
									{media.overview}
								</Typography>
							</CardContent>
						</Grid>
					</MUICard>
				))}
			<Grid container justify="center">
				<Pagination count={mediaList.total_pages} page={page} onChange={handleChange} />
			</Grid>
		</>
	)
}

export default Cards
