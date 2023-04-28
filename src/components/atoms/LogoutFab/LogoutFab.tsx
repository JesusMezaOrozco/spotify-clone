import React from 'react'
import { Tooltip } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import Router from 'next/router'

const LogoutFab = () => {
	const handleLogout = () => {
		localStorage.removeItem('Code')
		localStorage.removeItem('AccessToken')
		Router.push('/login')
	}
	return (
		<Tooltip title='Logout' placement='left'>
			<div className='fab-logout-container' onClick={handleLogout}>
				<LogoutIcon fontSize='medium' />
			</div>
		</Tooltip>
	)
}

export default LogoutFab
