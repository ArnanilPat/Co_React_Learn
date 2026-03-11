import React, { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      textAlign: "center",
      fontFamily: "Arial",
      padding: "30px"
    }}>

      <h1>User Search App</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "20px",
          borderRadius: "5px"
        }}
      />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        filteredUsers.map(user => (
          <div key={user.id} style={{
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px auto",
            width: "300px",
            borderRadius: "8px",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
          }}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default App;