import React, { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users
  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

  }, []);

  // Search filtering effect
  useEffect(() => {

    const timeout = setTimeout(() => {

      const result = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredUsers(result);

    }, 300); // debounce

    return () => clearTimeout(timeout);

  }, [search, users]);

  return (
    <div style={{
      fontFamily: "Arial",
      textAlign: "center",
      padding: "40px",
      background: "#f4f6f8",
      minHeight: "100vh"
    }}>

      <h1 style={{ marginBottom: "20px" }}>
        🔍 User Search App
      </h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "12px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "30px"
        }}
      />

      {loading && <h2>Loading users...</h2>}

      {error && <h2 style={{ color: "red" }}>{error}</h2>}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "900px",
        margin: "auto"
      }}>

        {filteredUsers.map(user => (

          <div
            key={user.id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              transition: "0.2s"
            }}
          >

            <h3>{user.name}</h3>
            <p>📧 {user.email}</p>
            <p>🏢 {user.company.name}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;