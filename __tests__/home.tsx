import { render, screen, fireEvent } from '@testing-library/react'
import Home from '@/pages/home'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

it('render welcome message to user', async () => {
	const mockStore = configureStore()
	render(
		<Provider
			store={mockStore({
				user: { user: { name: 'Pepito' } },
				songs: { songsList: [] },
			})}
		>
			<Home />
		</Provider>
	)
	const welcomeMessage = screen.getByText(/Bienvenido Pepito!/i)
	expect(welcomeMessage).toBeInTheDocument()
})

it('render searcher input and write on it', async () => {
	const mockStore = configureStore()
	render(
		<Provider
			store={mockStore({
				user: { user: { name: 'Pepito' } },
				songs: { songsList: [] },
			})}
		>
			<Home />
		</Provider>
	)
	const searchButton = screen.getByLabelText('search')
	fireEvent.click(searchButton)
	const searchInput = screen.getByLabelText('searcher-input')
	fireEvent.keyDown(searchInput)
})
