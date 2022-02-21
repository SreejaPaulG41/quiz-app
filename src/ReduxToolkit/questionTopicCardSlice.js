import { createSlice } from "@reduxjs/toolkit";
import { genres } from "../Data/genres";
import {sliceNames} from './storeConstants';

const initialState = {
    genreDetails: genres,
}

const questionTopicCardSlice = createSlice({
    name: sliceNames.RENDER_GENRE_NAME_AND_ID,
    initialState,
    reducers:{

    }
})

export const {} = questionTopicCardSlice.actions;

export default questionTopicCardSlice.reducer;