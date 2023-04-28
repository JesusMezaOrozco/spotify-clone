import { useEffect } from 'react'
import LoginForm from '@/components/molecules/LoginForm/LoginForm'

export default function Login() {
	useEffect(() => {
		localStorage.removeItem('Code')
		localStorage.removeItem('AccessToken')
	}, [])
	return (
		<div className='login-page-container'>
			<LoginForm />
		</div>
	)
}
