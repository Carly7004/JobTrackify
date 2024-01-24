import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
// import customFetch from '../../utils/axios';
import { getUserFromLocalStorage } from '../../utils/localStorage';
// import { logoutUser } from '../user/userSlice';
// import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobsSlice';
import { createJobThunk, deleteJobThunk, editJobThunk } from './jobThunk';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

export const createJob = createAsyncThunk('job/createJob', createJobThunk);

export const deleteJob = createAsyncThunk('job/deleteJob', deleteJobThunk);

export const editJob = createAsyncThunk('job/editJob', editJobThunk);

// export const createJob = createAsyncThunk(
//   '/job/createJob',
//   async (job, thunkAPI) => {
//     try {
//       const response = await customFetch.post('/jobs', job, {
//         headers: {
//           Authorization: `Bearer ${thunkAPI.getState().user.user.token} `,
//         },
//       });
//       thunkAPI.dispatch(clearValues());
//       return response.data;
//     } catch (error) {
//       if (error.response.status === 401) {
//         thunkAPI.dispatch(logoutUser());
//         return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
//       }
//       return thunkAPI.rejectWithValue(error.response.data.msg);
//     }
//   }
// );

// export const editJob = createAsyncThunk(
//   '/job/editJob',
//   async ({ jobId, job }, thunkAPI) => {
//     try {
//       const response = await customFetch.patch(`/jobs/${jobId}`, job, {
//         headers: {
//           Authorization: `Bearer ${thunkAPI.getState().user.user.token} `,
//         },
//       });
//       thunkAPI.dispatch(clearValues());
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data.msg);
//     }
//   }
// );

// export const deleteJob = createAsyncThunk(
//   '/job/deleteJob',
//   async (jobId, thunkAPI) => {
//     thunkAPI.dispatch(showLoading());
//     try {
//       const response = await customFetch.delete(`/jobs/${jobId}`, {
//         headers: {
//           Authorization: `Bearer ${thunkAPI.getState().user.user.token} `,
//         },
//       });
//       thunkAPI.dispatch(getAllJobs());
//       return response.data.msg;
//     } catch (error) {
//       thunkAPI.dispatch(hideLoading());
//       return thunkAPI.rejectWithValue(error.response.data.msg);
//     }
//   }
// );

const jobSlice = createSlice({
  name: 'job',
  initialState: initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || '',
      };
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state) => {
        state.isLoading = true;
        toast.success('Job Created');
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = true;
        toast.error(payload);
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success('Job Updated');
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
export default jobSlice.reducer;
