import React from 'react';

const CreateUser = ({ username, email, onChange, onCreate }) => {
  console.log('CreateUser render');
  return (
    <div>
      <input name="username" onChange={onChange} value={username} />
      <input name="email" onChange={onChange} value={email} />
      <button onClick={onCreate}>create</button>
    </div>
  );
}

export default React.memo(CreateUser);