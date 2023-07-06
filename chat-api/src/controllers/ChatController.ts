import express , {Router , Request , Response} from 'express'
import {ChatBd} from '@src/db/fileBd'
import { IMesssage } from '@src/interface/Interface'


const chatMessage: Router = express.Router()

chatMessage.get('/messages' , (req: Request , res:Response) => {
      
       if(!req.query.datetime){
              const arrMessage:IMesssage[] = ChatBd.getMessages()
       
              res.send(arrMessage.slice(0 ,30)) 
       }else{
              if(typeof req.query.datetime !== 'undefined'){
                     
                     const arrMessage:IMesssage[] = ChatBd.getMessages()
                     
                     const index:number = arrMessage.findIndex((val) => val.datetime === req.query.datetime)

                     
                     
                     if(index === arrMessage.length-1  ){
                            
                            res.send('')
                            
                     }else{
                           
                            res.send(arrMessage.slice(index+1 , arrMessage.length))
                     }
              }else{
                     res.status(404).send({error: {"error": "Not new message"}})
              }
              
       }
       

})

chatMessage.post('/messages' , (req:Request , res:Response) => {

       
       const {message , author} = req.body

       if(message.length !== 0 && author.length !== 0){
              ChatBd.createMessage({message : message , author: author})              
              res.send('')
       }else{
              res.status(404).send({error: {"error": "Author and message must be present in the request"}})
              console.log('check');
              
       }
       
})



export default chatMessage