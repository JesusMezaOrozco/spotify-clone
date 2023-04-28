import React, { useEffect, useState } from 'react'
import Header from '@/components/molecules/Header/Header'
import Footer from '@/components/atoms/Footer/Footer'
import Searcher from '@/components/molecules/Searcher/Searcher'
import SearchFab from '@/components/atoms/SearchFab/SearchFab'
import LogoutFab from '@/components/atoms/LogoutFab/LogoutFab'
import Gallery from '@/components/molecules/Gallery/Gallery'
import { getSongs, getUserData } from '@/network/spotify/SpotifyRequests'
import { useDispatch, useSelector } from 'react-redux'
import { setSongsList, setUser } from '@/store/Actions'
import { TSong } from '@/store/Types'
import { getUser } from '@/store/Selectors'

const Home = () => {
	const dispatch = useDispatch()
	const { user } = useSelector(getUser)
	const [showSearcher, setShowSearcher] = useState(true)
	const [searchValue, setSearchValue] = useState('')
	const handleSearchData = async (event: any) => {
		if (event.key === 'Enter') {
			await getSongs(searchValue)
				.then(({ data }) => {
					const tracks = data.tracks.items.map((track: any): TSong => {
						return {
							name: track.name,
							albumName: track.album.name,
							autor: track.artists[0].name,
							image: track.album.images[0].url,
							preview: track.preview_url,
						}
					})
					dispatch(setSongsList(tracks))
				})
				.catch((error) => {
					window.location.replace('/login')
				})
			setShowSearcher(false)
			return
		}
	}
	const handleCloseSearcher = () => {
		if (user.name) {
			setShowSearcher(false)
		} else {
			window.location.replace('./login')
		}
	}

	const getUserDataFromSpotify = async () => {
		const code = localStorage.getItem('Code')
		if (code) {
			await getUserData()
				.then((data: any) => {
					dispatch(
						setUser({
							name: data.display_name,
							profilePhoto: data.images.length > 0 ? data.images[0].url : '',
						})
					)
				})
				.catch((error: any) => {
					console.log(error)
				})
		} else {
			window.location.replace('/login')
		}
	}

	const onChangeSearcher = (event: any) => {
		setSearchValue(event.target.value)
	}

	useEffect(() => {
		getUserDataFromSpotify()
	}, [])

	return (
		<div className='home-page-container'>
			<Header />
			<Gallery />
			<Footer />
			<Searcher
				open={showSearcher}
				handleClose={handleCloseSearcher}
				handleSearchData={handleSearchData}
				value={searchValue}
				onChange={onChangeSearcher}
			/>
			<SearchFab action={() => setShowSearcher(true)} />
			<LogoutFab />
		</div>
	)
}

export default Home
