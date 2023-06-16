import React from 'react';
import Input from './Form';
import Header from './Header';
import Todo from './Todo';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      description
      completed
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: String!) {
    deleteTodos(id: $id) {
      description
      completed
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $completed: Boolean!) {
    updateTodos(id: $id, completed: $completed) {
      id
      description
      completed
    }
  }
`;
const Home = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  });
  const [updateTodos] = useMutation(UPDATE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  });


  if (loading) {
    return <div className='text-lg text-white'>Loading...</div>;
  }

  if (error) {
    return <div className='text-lg text-red-200'>Error: {error.message}</div>;
  }

  const todos = data.todos;

  const handleClick = (id: string) => {
    deleteTodo({
      variables: {
        id: id,
      },
    })
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  
  const handleUpdate=(id:string)=>{  
    updateTodos({
      variables: {
        id,
        completed: true,
      },
    })
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
  return (
    <div className='flex flex-col bg-gray-900 py-4 w-2/4'>
      <div className='flex justify-center mx-2 my-4'>
        <Header />
      </div>
      <div>
        <Input placeholder='create a todo here' />
      </div>
      <div className='my-4 flex justify-center flex-col gap-2'>
        {todos.map((todo: any) => (
          <Todo
            key={todo.id}
            completed={todo.completed}
            todo={todo.description}
            id={todo.id}
            onClick={() => handleClick(todo.id)}
            onUpdate={() => handleUpdate(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
