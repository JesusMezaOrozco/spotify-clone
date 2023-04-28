import axios from 'axios'
import { urls } from '@/constants/Endpoints'

export const getUserData = async (): Promise<any> => {
	const bodyRequest = new URLSearchParams()
	bodyRequest.append('grant_type', 'authorization_code')
	bodyRequest.append('code', `${localStorage.getItem('Code')}`)
	bodyRequest.append('redirect_uri', `${process.env.SPOTIFY_REDIRECTION_URI}`)

	const tokenData = await axios.post(urls.getSpotifyAccessToken, bodyRequest, {
		headers: {
			Authorization: `Basic ${Buffer.from(
				`${process.env.SPOTIFY_CLIENT_ID}` +
					':' +
					`${process.env.SPOTIFY_CLIENT_SECRET}`
			).toString('base64')}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	})
	localStorage.setItem('SpotifyAccessToken', tokenData.data.access_token)
	const userData = await axios.get(`${urls.spotifyApi}/me`, {
		headers: {
			Authorization: `Bearer ${tokenData.data.access_token}`,
			'Content-Type': 'application/json',
		},
	})
	return { ...tokenData.data, ...userData.data }
}

export const getSongs = async (searchValue: string): Promise<any> => {
	const data = await axios.get(`${urls.spotifyApi}/search`, {
		params: {
			q: searchValue,
			type: 'track',
		},
		headers: {
			Authorization: `Bearer ${localStorage.getItem('SpotifyAccessToken')}`,
		},
	})
	return data
}
