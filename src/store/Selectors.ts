import { AppState } from './Types'

export const getUser = (state: AppState) => state.user
export const getSongsList = (state: AppState) => state.songs.songsList
