import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

export const signUpUser = createAsyncThunk("signUpUser", async (body) => {


  const sendData = JSON.stringify({
    email: body.email,
    password: body.password,
    cPassword: body.cPassword,
  });

  var config = {
    method: "post",
    url: `${process.env.REACT_APP_BASE_URL}/signUp`,
    headers: {
      "Content-Type": "application/json",
    },
    data: sendData,
  };

  axios(config)
    .then(function (response) {
   
      return response.data;

    })
    .catch(function (error) {
      console.log(error);
    });

});

export const signInUser = createAsyncThunk("signInUser", async (body) => {
  
  const sendData = JSON.stringify({
    email: body.email,
    password: body.password,
    cPassword: body.cPassword,
  });

  var config = {
    method: "post",
    url:`${process.env.REACT_APP_BASE_URL}/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: sendData,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      return response.data;

    })
    .catch(function (error) {
      console.log(error);
    });
  });   
  


    export const emailSend = createAsyncThunk("emailSend", async (body) => {
  
      const sendData = JSON.stringify({
        email: body.email,
      });
    
      var config = {
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}/send-email`,
        headers: {
          "Content-Type": "application/json",
        },
        data: sendData,
      };
    
      axios(config)
        .then(function (response) {
          console.log(response.data);
          return response.data;
    
        })
        .catch(function (error) {
          console.log(error);
        });
      
  
  

});

export const verifyOtp = createAsyncThunk("verifyOtp", async (body) => {
  
  const sendData = JSON.stringify({
    email: body.email,
  });

  var config = {
    method: "post",
    url: `${process.env.REACT_APP_BASE_URL}/send-email`,
    headers: {
      "Content-Type": "application/json",
    },
    data: sendData,
  };

  axios(config)
    .then(function (response) {
  
      return response.data;

    })
    .catch(function (error) {
      console.log(error);
    });
});


const Authslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.token = localStorage.getItem("user");
    },
  },
  extraReducers: {
    // ********SignIn******
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (
      state,
      { payload: { error, msg, token, user } }
    ) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.token = token;
        state.user = user;

        localStorage.setItem("msg", msg);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },

    //*******signup**********/
    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true;
    },

    //*******emailsend**********/
    [emailSend.pending]: (state, action) => {
      state.loading = true;
    },
    [emailSend.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [emailSend.rejected]: (state, action) => {
      state.loading = true;
    },



     //*******verify otp**********/
     [verifyOtp.pending]: (state, action) => {
      state.loading = true;
    },
    [verifyOtp.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [verifyOtp.rejected]: (state, action) => {
      state.loading = true;
    },

  },
});

export const { addToken, addUser } = Authslice.actions;
export default Authslice.reducer;
