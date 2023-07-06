import React, { ChangeEvent } from 'react'

interface TextProps {
       
}

interface ITexrarea{
       onChange:(e: ChangeEvent<HTMLTextAreaElement>) => void
       value:string
       placeholder:string
       styles:string
       name:string
}

const Textarea = ({value , placeholder , onChange , styles , name}:ITexrarea) => {
       return (
              <textarea
                     name={name}
                     onChange={onChange}
                     value={value}
                     className={styles}
                     placeholder={placeholder}
              />
       )
}

export default Textarea