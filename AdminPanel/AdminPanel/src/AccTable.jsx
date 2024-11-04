import React, { useCallback, useEffect, useState } from "react";


function AccTable() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [showPass, setShowPass] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const togglePassVisibility = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };

  
  const handleEmailChange = (e) => {
    const input = e.target.value;
    setEmail(input);
    setIsValid(emailRegex.test(input)); // Check format
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("name:", name);
    console.log("email:", email);
    console.log("password:", password);
    if (name && email && password) {
      // Thêm người dùng vào mảng data
      const newUser = { id : data.length + 1, name, email, password };
      setData((prevData) => [...prevData, newUser]);


      // Reset các input về chuỗi rỗng
      setName("");
      setEmail("");
      setPassword("");
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
   
  };
  console.log(name)

  return (
    <div className="table-container">
      <div className="input-box">
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
          <input
            className="input-text"
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input-text"
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={handleEmailChange}
            style={{ borderColor: isValid ? "black" : "red" }} // Visual indicator
          />
          {!isValid && <p style={{ color: "red" }}>Invalid email format</p>}

          <div style={{ position: "relative", width: "fit-content" }}>
            <input
              className="input-text"
              type={showPass ? "text" : "password"}
              value={password}
              placeholder="Enter your password"
              style={{
                paddingRight: "40px", // Space for the button inside the input
                width: "200px", // Adjust width as needed
                height: "30px"
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={togglePassVisibility}
              type="button"
              style={{
                position: "absolute",
                right: "10px", // Position button inside input on the right
                top: "55%",
                transform: "translateY(-50%)",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
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
        <tbody
          style={{
            backgroundColor: "Gray",
            textAlign: "center",
            color: "black",
          }}
        >
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.status}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AccTable;
