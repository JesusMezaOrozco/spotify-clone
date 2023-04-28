export const urls = {
	getSpotifyAuthorization: `https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.SPOTIFY_REDIRECTION_URI}&scope=user-read-private`,
	getSpotifyAccessToken: `https://accounts.spotify.com/api/token`,
	spotifyApi: `https://api.spotify.com/v1`,
}
