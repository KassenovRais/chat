import React, { ChangeEvent, ReactElement, useEffect, useLayoutEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { RootState , AppDispatch } from '../index';
import { IMessage, IMessageValue } from '../Interface/Interfaces';
import { getDataMessage , postDataMessage , getDataByDatetime} from '../Store/ChatReducer';
import gsap from 'gsap';
import { createAnimation } from '../AnomationFN/CreateAnimation';
import { ScrollTrigger  } from 'gsap/all';
import MessagePost from '../Componennts/MessagePost';
import '../Styles/APP.css'
import Input from '../Componennts/Input';
import Textarea from '../Componennts/Textarea';
import Button from '../Componennts/Button';


function Container() {

  const message = useSelector<RootState , IMessage[]> (state => state.messages)
  const dispatch = useDispatch<AppDispatch> ()

  const [lengthState , setLengthState ] = useState<number>(0)

  gsap.registerPlugin(ScrollTrigger)

  const [value , setValue] = useState<IMessageValue>({
    message: '',
    author: ''
  })


  const onSubmit = (form:ChangeEvent<HTMLFormElement>) => {

    form.preventDefault()

    const messageValid: number = value.message.trim().split(' ').join('').length
    
    const authorValid: number = value.author.trim().split(' ').join('').length

    if(messageValid !== 0 && authorValid !== 0){

      dispatch(postDataMessage({message:value.message , author : value.author}))

    }
  
    
    setValue({message: '' , author: ''})
    
  }


  const elementCreate = async () => {

    await dispatch(getDataMessage())

    setInterval( () => {
      dispatch(getDataByDatetime())
    }, 1000)

  }


  useEffect(() => {
      
    elementCreate().catch(err => console.log(err))

  },[dispatch])

 

  useLayoutEffect(() => {

      const arrElements:string[] = gsap.utils.toArray('.postBlock')

      if(message.length > lengthState ){
        const arrMessages: string[] = arrElements.splice(lengthState , message.length)
        
        arrMessages.map(val => {
          createAnimation(val)
        })
        setLengthState(message.length)
      }
  },[message])
  
  return (
    <>
      
        {
          message.map((val) => {
            return <MessagePost
              key={val.id}
              props={val}
              styles="postBlock"
            />
          })
        }
      
      <div className='validBlock' >
        <form onSubmit={onSubmit}>

          <Input
            name='author'
            placeholder='ENTER NAME'
            styles='author'
            onChange={(e) => setValue({...value , author: e.target.value})}
            value={value.author}
          />
          <Textarea
            value={value.message}
            name='message'
            styles='message'
            placeholder='ENTER MESSAGE'
            onChange={(e) => setValue({...value , message: e.target.value})}
          />
          <Button
            onClick={() => {}}
            children='save'
            styles='btn'
          />
        </form>
      </div>
    </>
  );
}

export default Container;
