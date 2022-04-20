import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITEMS_PER_PAGE } from "../utilites/variables";

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async(userData) => {
		const {inputValue, currentPages = 1, sort='followers', order='desc'} = userData;
		let currentPage = currentPages > Math.floor(1000 / ITEMS_PER_PAGE) ? Math.floor(1000 / ITEMS_PER_PAGE):currentPages
				
	  const response = await fetch(`https://api.github.com/search/users?q=${inputValue}&per_page=${ITEMS_PER_PAGE}&page=${currentPage}&sort=${sort}&order=${order}`);
	  const data = await response.json();
	  return data
	}
  )
export const fetchUser = createAsyncThunk(
	'users/fetchUser',
	async(userID) => {
	  const response = await fetch(`https://api.github.com/user/${userID}`);
	  const data = await response.json();
	  return data
	}
  )
 
const usersSlice = createSlice({
	name:'users',
	initialState: {
		users:[],
		currentUser:null,
		total_count: 0,
		currentPage: 1,
		category: 'rating',
		status:null,
		error:null,
	},
	reducers: {
		setCategory(state, action) {
			state.category = 	action.payload
	
		},
		setCurrentPage(state, action) {
			state.currentPage  = action.payload;
			
		}
	},
	extraReducers: {
		[fetchUsers.pending]: (state) => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchUsers.fulfilled]: (state, action) => {
			if(action.payload.message) {
				state.error = action.payload.message;
			} else {
				state.status = 'resolved';
				state.users = action.payload.items;
				state.total_count = action.payload.total_count;
			}
		},
		
		[fetchUser.pending]: (state) => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchUser.fulfilled]: (state, action) => {
			if(action.payload.message) {
				state.error = action.payload.message;
			} else {
				state.status = 'resolved';
				state.currentUser = action.payload;
			}
		},
			},
})

export const {addUsers, setCategory, setCurrentPage} = usersSlice.actions
export default usersSlice.reducer