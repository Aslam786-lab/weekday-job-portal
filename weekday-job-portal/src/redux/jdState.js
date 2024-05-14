import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    jdList: [],
    isLoading: false,
    offset: 0,
    totalCount: 0,
    filters: {},
}

const jdSlice = createSlice({
    name: 'jd',
    initialState,
    reducers: {
        fetchJdRequest: (state) => {
            state.isLoading = true;
        },
        fetchJdSuccess: (state, action) => {
            state.jdList = [...state.jdList, ...action.payload.filteredJd];
            state.isLoading = false;
            state.offset = action.payload.offset;
            state.totalCount = action.payload.totalCount;
        },
        applyFilter: (state, action) => {
            state.filters = {...state.filters, ...action.payload}
        }
    }
})

export const { fetchJdRequest, fetchJdSuccess, applyFilter} = jdSlice.actions

export default jdSlice.reducer;