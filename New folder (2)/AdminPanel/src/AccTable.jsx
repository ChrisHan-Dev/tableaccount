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
      <form action="">
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your email" />
        <input type="text" placeholder="Enter your password" />
        <button>Add</button>
      </form>
      <table>
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
