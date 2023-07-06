import { createSlice , createAsyncThunk, PayloadAction, ValidateSliceCaseReducers } from "@reduxjs/toolkit"; 
import axios, { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ValidateResult } from "react-hook-form";
import { IMessage, IMessageValue, StoreProps } from "../Interface/Interfaces";


const ArrMessage: IMessage[] = []

export const getDataMessage = createAsyncThunk(
       'getDataMessage',

       async () => {
             
              const responce = await axios.get<AxiosRequestConfig , AxiosResponse <IMessage[]>>('/messages')

              return responce.data
             
       }
)
export const getDataByDatetime = createAsyncThunk(
       'datetimeData',


       async (_ , {getState}) => {
              const arrMessages:StoreProps = getState() as StoreProps
              if(arrMessages.messages.length !== 0){
              
                     const responce = await axios.get<AxiosRequestConfig , AxiosResponse <IMessage[]>>(`messages?datetime=${arrMessages.messages.at(-1)?.datetime}`)

                     return responce.data
              }

              
              return []
              
              
              
       }
)

export const postDataMessage = createAsyncThunk(
       'postDataMessage',

       async (objMessage:IMessageValue , {rejectWithValue , fulfillWithValue}) => {
                     
              const responce = await axios.post<AxiosRequestConfig , AxiosResponse  >('messages' , objMessage)

              return responce.data

              
       }
)

const messagesReducer = createSlice({
       name: 'messages',
       initialState :ArrMessage,
       reducers: {
             

       },extraReducers:(builder) => {
              builder
              .addCase(getDataMessage.fulfilled , (state , action) =>  {
                     
                     return state = [ ...state , ...action.payload]
              })
              .addCase(getDataByDatetime.fulfilled , (state , action) => {
                     
                     if(action.payload.length !== 0){
                            return state = [...state , ...action.payload]
                     }
              })
              .addCase(postDataMessage.rejected , (state , {payload}) => {
                     console.log(payload);
                     
              })
             
       }      
})


export const {} = messagesReducer.actions
export default messagesReducer.reducer