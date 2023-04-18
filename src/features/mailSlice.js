import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSendMessageOpen: false,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = amount;
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    openSendMessage: (state) => {
      state.isSendMessageOpen = true;
    },
    closeSendMessage: (state) => {
      state.isSendMessageOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIsSendMessageOpen = (state) => state.isSendMessageOpen;

export default mailSlice.reducer;
