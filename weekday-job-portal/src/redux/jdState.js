import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    jdList: [],
    isLoading: false,
}

const jdSlice = createSlice({
    name: 'jd',
    initialState,
    reducers: {
        fetchJdRequest: (state) => {
            state.isLoading = true;
        },
        fetchJdSuccess: (state, action) => {
            state.jdList = action.payload.filteredJd;
            state.isLoading = false;
        },
        
    }
})

export const { fetchJdRequest, fetchJdSuccess, applyFilter} = jdSlice.actions

export default jdSlice.reducer;