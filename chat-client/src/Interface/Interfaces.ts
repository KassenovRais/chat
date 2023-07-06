export interface IMessage {
       id:string
       message: string
       author:string
       datetime:string
}
export interface IMessageValue {
       message: string
       author:string
}
export interface StoreProps{
       messages: IMessage[]
       author:string
}