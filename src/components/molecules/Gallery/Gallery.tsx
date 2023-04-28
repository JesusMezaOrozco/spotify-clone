import React from 'react'
import SongCard from '@/components/atoms/SongCard/SongCard'
import { getSongsList } from '@/store/Selectors'
import { useSelector } from 'react-redux'

const Gallery = () => {
	const songList = useSelector(getSongsList)
	return (
		<div className='gallery-container'>
			{songList.map((song, index) => {
				return <SongCard key={index} songData={song} />
			})}
		</div>
	)
}

export default Gallery
