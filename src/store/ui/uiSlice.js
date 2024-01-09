import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newChannelModal: {
        isOpen: false
    },
    editMessageModal: {
        isOpen: false,
        messageId: null
    },
    sidebar: {
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
        openEditTextModal: ( state, {payload} )=>{
            state.editMessageModal.isOpen = true;
            state.editMessageModal.messageId = payload;
        },
        openSidebar: (state)=>{
            state.sidebar.isOpen = true;
        },
        closeNewChannelModal: ( state )=>{
            state.newChannelModal.isOpen = false;
        },
        closeEditTextModal: ( state )=>{
            state.editMessageModal.isOpen = false;
        },
        closeSidebar: (state)=>{
            state.sidebar.isOpen = false;
        },

    }
});

export const { 
    openEditTextModal, 
    openNewChannelModal, 
    openSidebar, 
    closeEditTextModal, 
    closeNewChannelModal, 
    closeSidebar } = uiSlice.actions;    
export default uiSlice.reducer;