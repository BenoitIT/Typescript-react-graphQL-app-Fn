import React from 'react';

type FormProps = {
  placeholder: string;
};

const Form = (props: FormProps) => {
  return (
    <div className='mx-auto w-2/4'>
      <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full py-2 px-10 autline-none text-center"  placeholder={props.placeholder}/>
    </div>
  );
};

export default Form;