import React from 'react';
import Input from './Form';
import Header from './Header';
import Todo from './Todo';

const Home= ()=>{

    return (
        <div className='flex flex-col bg-gray-900 py-4 w-2/4'>
         <div className='flex justify-center mx-2 my-4'>
          <Header/>
         </div>
         <div>
          <Input placeholder='create a todo here'/>
          </div>
          <div className='my-4 flex justify-center flex-col gap-2'> 
            <Todo completed={false} todo="manage my things" id='sgs32348h'/>
            <Todo completed={true} todo="work on my things" id='sgs32348h'/>
            <Todo completed={false} todo="yes get my things" id='sgs32348h'/>
            <Todo completed={true} todo=" that's all my things" id='sgs32348h'/>
            <Todo completed={false} todo="yeah mn my things" id='sgs32348h'/>
            <Todo completed={false} todo="manage my things" id='sgs32348h'/>
          </div>
        </div>
    )
}
export default Home;