import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TUser, TSong } from './Types'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {
			name: '',
			profilePhoto: '',
		},
	},
	reducers: {
		setUser: (state, action: PayloadAction<TUser>) => {
			state.user = action.payload
		},
	},
})

export const songsSlice = createSlice({
	name: 'songs',
	initialState: {
		songsList: [] as TSong[],
	},
	reducers: {
		setSongsList: (state, action: PayloadAction<TSong[]>) => {
			state.songsList = action.payload
		},
	},
})
