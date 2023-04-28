import { ThunkAction, Action } from '@reduxjs/toolkit'
import { Store } from './Store'

export type AppStore = ReturnType<typeof Store>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>

export type TUser = {
	name: string
	profilePhoto: string
}

export type TSong = {
	name: string
	autor: string
	albumName: string
	image: string
	preview: string
}
