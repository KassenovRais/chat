import React , {ReactNode}from 'react'

interface IButton {
       children:ReactNode
       styles:string
       onClick:() => void
}

const Button = ({children , styles , onClick}: IButton) => {
       return (
              <button
                     onClick={onClick}
                     className={styles}
              >
                     {children}
              </button>
       )
}

export default Button