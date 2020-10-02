import React from 'react';

export default function Form() {
  const [inputName, setInputName] = React.useState("");
  const onChangeHandler = event => {
    setInputName(event.target.value);
  };
  return (

    <input
      type="text"
      name="name"
      onChange={onChangeHandler}
      value={inputName}
    />
  )
}


// сделать инпуты в этой компоненте и чтобы записывались вводимые данные через e.target.value и по событию onchange изменялся value