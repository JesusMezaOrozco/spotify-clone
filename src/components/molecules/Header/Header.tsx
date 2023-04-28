import React from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '@/store/Selectors'
import { Avatar } from '@mui/material'

const Header = () => {
	const { user } = useSelector(getUser)
	return (
		<div className='header-container'>
			<div className='header-brand-container'>
				<img src='/favicon.svg' alt='logo' width='50' height='50' />
				<h3>Spoti Bolivar</h3>
				<p>
					{user.name ? 'Bienvenido ' + user.name + '!' : 'No te conozco! :('}
				</p>
			</div>
			<Avatar
				alt={user.name}
				src={user.name && user.profilePhoto}
				sx={{ marginRight: 3 }}
			/>
		</div>
	)
}

export default Header
