import React from 'react'
import { IMessage } from '../Interface/Interfaces'

interface IPost {
       props:IMessage
       styles:string
}


const MessagePost = ({props , styles}:IPost) => {


       return (
              <div className={styles} >
                     <span>MESSAGE</span>
                     <h2>{props.author}</h2>
                     <p>{props.message}</p>  
                     <h2>{ new Date(props.datetime).toTimeString()}</h2>
              </div>
       )
}

export default MessagePost