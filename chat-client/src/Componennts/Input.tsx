import React, { ChangeEvent } from 'react'

interface IInput{
       value:string;
       onChange:(e:ChangeEvent<HTMLInputElement>) => void
       name:string
       styles:string
       placeholder:string
}


const Input = ({
       styles , 
       placeholder , 
       onChange , 
       name , 
       value}:IInput) => {
       return (
             <input
                     value={value}
                     onChange={onChange}
                     className={styles}
                     name={name}
                     placeholder={placeholder}
             />
       )
}

export default Input