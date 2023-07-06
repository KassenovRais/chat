export class MessageDto {
       message:string;
       author: string;
       public constructor(message:string , author: string ) {
              this.message = message
              this.author = author
       }
}