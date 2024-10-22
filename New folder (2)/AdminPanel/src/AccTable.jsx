import React, { useCallback, useState } from "react";


function AccTable() {
  const[data, setData] = useState([]);
  const[name, setName] =useState('');
  const[email, setEmail] =useState('');
  const[password, setPassword] =useState('');

  const handleSubmit = (event) => {
        event.preventDefault();
        const id = data.length + 1

  }

  return (
    <div className="table-container">
      <div className="input-box">
      <form action="">
        <input className="input-text" type="text" placeholder="Enter your name" onChange={e =>setName(e.target.value)}/>
        <input className="input-text" type="text" placeholder="Enter your email" onChange={e =>setEmail(e.target.value)}/>
        <input className="input-text" type="text" placeholder="Enter your password" onChange={e =>setPassword(e.target.value)}/>
        <button className="add-button">Add</button>
      </form>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AccTable;
