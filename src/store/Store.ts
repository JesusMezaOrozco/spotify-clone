import { configureStore } from '@reduxjs/toolkit'
import { songsSlice, userSlice } from './Slices'
import { createWrapper } from 'next-redux-wrapper'
import { AppStore } from './Types'

export const Store = () =>
	configureStore({
		reducer: {
			user: userSlice.reducer,
			songs: songsSlice.reducer,
		},
		devTools: true,
	})

export const Wrapper = createWrapper<AppStore>(Store)
