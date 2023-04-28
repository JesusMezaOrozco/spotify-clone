import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Tooltip } from '@mui/material'

type TSearchFab = {
	action: () => void
}

const SearchFab = ({ action }: TSearchFab) => {
	return (
		<Tooltip title='Search Music' placement='left'>
			<div
				className='fab-search-container'
				onClick={action}
				aria-label='search'
			>
				<SearchIcon fontSize='large' />
			</div>
		</Tooltip>
	)
}

export default SearchFab
