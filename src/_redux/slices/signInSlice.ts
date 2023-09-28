import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";

interface DataRequest {
  email: string;
  password: string;
}
export interface Data {
  login: boolean;
  uid?: string;
  name?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  role?: string;
}
interface InitialState {
  loading: boolean;
  result: Data;
  error: string;
}
const initialState: InitialState = {
  loading: false,
  result: { login: false },
  error: "",
};

export const fetch = createAsyncThunk(
  "signIn/fetch",
  async ({ email, password }: DataRequest) => {
    try {
      //
    } catch (error) {
      return { error: String(error) };
    }
  }
);

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetch.pending, (state) => {
      state.loading = true;
      state.result = initialState.result;
      state.error = "";
    });
    builder.addCase(fetch.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      if (action.payload?.uid !== undefined) {
        state.result = {
          login: true,
          uid: action.payload?.uid,
          email: action.payload?.email,
          name: action.payload?.name,
          lastName: action.payload?.lastName,
          phone: action.payload?.phone,
          role: action.payload?.role,
        };
        state.error = "";
      } else {
        state.result = initialState.result;
        state.error = action.payload?.error ?? "Something went wrong";
      }
    });
    builder.addCase(fetch.rejected, (state, action) => {
      state.loading = false;
      state.result = initialState.result;
      state.error = action.error.message ?? "Something went wrong";
    });
  },
});

export default signInSlice.reducer;

export const { logout } = signInSlice.actions;
