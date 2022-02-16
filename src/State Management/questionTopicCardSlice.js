import { createSlice } from "@reduxjs/toolkit";
import { genres } from "../Data/genres";

const initialState = {
    genreDetails: genres,
}

const questionTopicCardSlice = createSlice({
    name: 'Render Genre Name And ID',
    initialState,
    reducers:{

    }
})

export const {} = questionTopicCardSlice.actions;

export default questionTopicCardSlice.reducer;