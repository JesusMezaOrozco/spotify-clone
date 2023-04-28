import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { TSong } from '@/store/Types'

type TSongCard = {
	songData: TSong
}

const SongCard = ({ songData }: TSongCard) => {
	return (
		<Card
			sx={{ width: 210, maxHeight: 290, position: 'relative' }}
			className='card-container'
			elevation={4}
		>
			<CardMedia
				component='img'
				alt={songData.name}
				height='150'
				image={songData.image}
				sx={{ opacity: 0.9 }}
			/>
			<CardContent className='card-content-container'>
				<Typography gutterBottom variant='body1' component='div'>
					{songData.name.slice(0, 20)}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{songData.autor.slice(0, 15)}
				</Typography>
				<Typography variant='caption' color='text.secondary'>
					{songData.albumName.slice(0, 15)}
				</Typography>
				<audio
					className='audio-controller'
					controls
					src={songData.preview}
				></audio>
			</CardContent>
		</Card>
	)
}

export default SongCard
