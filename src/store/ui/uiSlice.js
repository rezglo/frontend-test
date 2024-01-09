import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newChannelModal: {
        isOpen: false
    },
    editMessageModal: {
        isOpen: false,
        messageId: null
    }
};


const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openNewChannelModal: ( state )=>{
            state.newChannelModal.isOpen = true;
        },
        openEditTextModal: ( state, {payload} )=>{
            state.editMessageModal.isOpen = true;
            state.editMessageModal.messageId = payload;
        },
        closeNewChannelModal: ( state )=>{
            state.newChannelModal.isOpen = false;
        },
        closeEditTextModal: ( state )=>{
            state.editMessageModal.isOpen = false;
        }

    }
});

export const { openEditTextModal, openNewChannelModal, closeEditTextModal, closeNewChannelModal } = uiSlice.actions;
export default uiSlice.reducer;