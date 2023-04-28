import React, { useEffect } from 'react'
import { Button, SvgIcon, SvgIconProps, Typography } from '@mui/material'
import { urls } from '@/constants/Endpoints'
import { useRouter } from 'next/router'

function UnloggedIcon(props: SvgIconProps) {
	return (
		<SvgIcon {...props}>
			<path
				d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z'
				transform='translate(4, 4)'
			/>
		</SvgIcon>
	)
}

const LoginForm = () => {
	const { query } = useRouter()

	const handleSubmit = (
		event: React.FormEvent<HTMLFormElement> | undefined
	) => {
		event?.preventDefault()
		window.location.replace(urls.getSpotifyAuthorization)
	}

	useEffect(() => {
		if (query.code) {
			localStorage.setItem('Code', query.code as string)
			window.location.replace('/home')
		}
	}, [query])

	return (
		<form className='form-login-container' onSubmit={handleSubmit}>
			<Typography variant='h3'>Login</Typography>
			<div className='form-header-container'>
				<Typography variant='caption'>Welcome To Spoti Bolivar!</Typography>
				<UnloggedIcon sx={{ fontSize: 80 }} />
			</div>
			<div className='form-actions-container'>
				<Button type='submit' color='primary' variant='contained'>
					Click Here!
				</Button>
			</div>
		</form>
	)
}

export default LoginForm
