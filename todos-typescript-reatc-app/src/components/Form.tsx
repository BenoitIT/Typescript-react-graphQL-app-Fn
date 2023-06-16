import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

type FormProps = {
  placeholder: string;
};

const ADD_TODO = gql`
  mutation AddTodo($description: String!, $completed: Boolean!) {
    addTodos(description: $description, completed: $completed) {
      id
      description
      completed
    }
  }
`;


const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      description
      completed
    }
  }
`;
const Form = (props: FormProps) => {
  const [inputTodo, setInputTodo] = useState("");
  const [addTodo] = useMutation(ADD_TODO,{refetchQueries: [{ query: GET_TODOS }],});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  };

  const handleOnSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      addTodo({
        variables: {
          description: inputTodo,
          completed: false,
        },
      })
        .then((response: any) => {
          console.log(response);
        })
        .catch((error: any) => {
          console.error(error);
        });

      setInputTodo("");
    }
  };

  return (
    <div className="mx-auto w-2/4">
      <form>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-2 px-10 outline-none text-center"
          placeholder={props.placeholder}
          value={inputTodo}
          onChange={handleOnChange}
          onKeyDown={handleOnSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
