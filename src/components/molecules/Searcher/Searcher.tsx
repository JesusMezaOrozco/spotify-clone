import React from 'react'
import {
	Dialog,
	DialogContent,
	TextField,
	InputAdornment,
	styled,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useSelector } from 'react-redux'
import { getUser } from '@/store/Selectors'

type TSearcher = {
	open: boolean
	handleClose: () => void
	handleSearchData: (event) => void
	value: string
	onChange: (event) => void
}

const CssSearcher = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		'&.Mui-focused fieldset': {
			borderColor: '#2b8b4b',
		},
	},
})

const Searcher = ({
	open,
	handleClose,
	handleSearchData,
	onChange,
}: TSearcher) => {
	const { user } = useSelector(getUser)

	return (
		<Dialog
			open={open}
			keepMounted
			onClose={handleClose}
			aria-describedby='alert-dialog-slide-description'
		>
			<DialogContent>
				<CssSearcher
					aria-label='searcher-input'
					autoComplete='off'
					placeholder={
						user.name
							? 'Search Your Favorite Song...'
							: 'Lo siento... no te conozco :(!'
					}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<SearchIcon />
							</InputAdornment>
						),
					}}
					onChange={onChange}
					onKeyDown={handleSearchData}
					style={{ width: '500px' }}
					disabled={user.name ? false : true}
				></CssSearcher>
			</DialogContent>
		</Dialog>
	)
}

export default Searcher
