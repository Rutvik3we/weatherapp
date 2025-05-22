import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getForecast } from '../services/weatherService';

export const fetchForecast = createAsyncThunk(
  'weather/fetchForecast',
  async (city) => {
    const forecast = await getForecast(city);
    return { city, forecast };
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: '',
    forecast: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.city = action.payload.city;
        state.forecast = action.payload.forecast;
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
