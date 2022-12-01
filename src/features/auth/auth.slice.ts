import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';

interface AuthState {
  isLoading: boolean;
  token: string;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  isLoggedIn: false,
  token: '',
};

interface StoreCredentialParams {
  email: string;
  passwordHashed: string;
  token: string;
}

export const storeCredential = createAsyncThunk(
  'auth/storeCredential',
  async ({email, passwordHashed, token}: StoreCredentialParams) => {
    await Promise.all([
      EncryptedStorage.setItem('email', email),
      EncryptedStorage.setItem('passwordHashed', passwordHashed),
    ]);

    return {token};
  },
);

export const restoreCredential = createAsyncThunk(
  'auth/restoreCredential',
  async () => {
    const [email, passwordHashed] = await Promise.all([
      EncryptedStorage.getItem('email'),
      EncryptedStorage.getItem('passwordHashed'),
    ]);

    return {email, passwordHashed};
  },
);

export const removeCredential = createAsyncThunk(
  'auth/removeCredential',
  async () => {
    await Promise.all([
      EncryptedStorage.removeItem('email'),
      EncryptedStorage.removeItem('passwordHashed'),
    ]);
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    /* Store Credential */
    builder.addCase(storeCredential.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(storeCredential.fulfilled, (state, actions) => {
      const {token} = actions.payload;

      state.isLoggedIn = true;
      state.token = token;
      state.isLoading = false;
    });
    builder.addCase(storeCredential.rejected, state => {
      state.isLoading = false;
    });

    /* Remove Credential */
    builder.addCase(removeCredential.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(removeCredential.fulfilled, state => {
      state.isLoggedIn = false;
      state.token = '';
      state.isLoading = false;
    });
    builder.addCase(removeCredential.rejected, state => {
      state.isLoading = false;
    });

    /* Restore Credential */
    builder.addCase(restoreCredential.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(restoreCredential.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(restoreCredential.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const {} = authSlice.actions;
