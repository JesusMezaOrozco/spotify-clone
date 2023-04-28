/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
		SPOTIFY_REDIRECTION_URI: process.env.SPOTIFY_REDIRECTION_URI,
		SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
	},
	output: 'standalone',
	redirects() {
		return [
			{
				source: '/',
				destination: '/login',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
