import fs from 'fs'
import { MessageDto } from '@src/DTO/message.dto'
import { IMesssage } from '@src/interface/Interface'
import { nanoid } from 'nanoid'
import { format } from 'path'

const path:string = './src/db/messages/messages.json'


export  const  ChatBd = {
       getMessages(){
              
              const files =  fs.readFileSync(path , 'utf8' ) 

              const jsonFiles:IMesssage [] = JSON.parse(files)

              jsonFiles.sort((a , b) => {
                     return (a.datetime < b.datetime) ? -1 : ((a.datetime > b.datetime) ? 1 : 0)
              })



              return jsonFiles
       },
       createMessage(item:MessageDto) {

              const newMessage: IMesssage = {
                     id:nanoid(),
                     message: item.message,
                     author:item.author,
                     datetime : (new Date()).toISOString()
                     
              }  

              const files =  fs.readFileSync(path , 'utf8' ) 
              
              const jsonFiles:IMesssage [] = [...JSON.parse(files) , newMessage]

              

              fs.writeFileSync(path , JSON.stringify(jsonFiles))
       },
       
} 




