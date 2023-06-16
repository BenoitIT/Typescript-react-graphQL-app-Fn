import React from 'react';

type InputProps = {
  todo: string;
  completed: boolean;
  id: string;
  onClick: () => void;
  onUpdate: () => void;
};

const Todo = ({ completed, todo, onClick,onUpdate}: InputProps) => {
  return (
    <div className='mx-auto w-2/4 bg-gray-50 border border-gray-300 shadow py-2 rounded-md shadow-gray-300 flex gap-8 justify-center hover:bg-gray-400 hover:cursor-pointer'>
      <input type="checkbox" checked={completed} className='w-4 h-4 rounded-3xl' onClick={onUpdate}/>
      <h1 className={`${completed ? 'line-through font-medium' : ''} text-gray-900 text-center text-sm font-light`} onClick={onClick}>
        {todo}
      </h1>
    </div>
  );
};

export default Todo;