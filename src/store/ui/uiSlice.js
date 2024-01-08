import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newChannelModal: {
        isOpen: false
    },
    editTextModal: {
        isOpen: false
    }
};


const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openNewChannelModal: ( state )=>{
            state.newChannelModal.isOpen = true;
        },
        openEditTextModal: ( state )=>{
            state.editTextModal.isOpen = true;
        },
        closeNewChannelModal: ( state )=>{
            state.newChannelModal.isOpen = false;
        },
        closeEditTextModal: ( state )=>{
            state.editTextModal.isOpen = false;
        }

    }
});

export const { openEditTextModal, openNewChannelModal, closeEditTextModal, closeNewChannelModal } = uiSlice.actions;
export default uiSlice.reducer;