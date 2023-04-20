import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  selectedMail: null,
  isSendMessageOpen: false,
};


export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload
    },
    openSendMessage: (state) => {
      state.isSendMessageOpen = true;
    },
    closeSendMessage: (state) => {
      state.isSendMessageOpen = false;
    },
  },
});

export const {openSendMessage, closeSendMessage, selectMail} = mailSlice.actions;

export const selectIsSendMessageOpen = (state) => state.mail.isSendMessageOpen;
export const selectOpenMail = state => state.mail?.selectedMail

export default mailSlice.reducer;
