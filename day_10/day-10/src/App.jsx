import React, { useEffect, useState, useMemo } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

  }, []);

  // Optimized filtering
  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  const theme = {
    background: darkMode ? "#121212" : "#f4f6f8",
    color: darkMode ? "white" : "black"
  };

  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px",
      textAlign: "center",
      fontFamily: "Arial",
      background: theme.background,
      color: theme.color,
      transition: "0.3s"
    }}>

      <h1>🚀 Advanced User Search</h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "8px 15px",
          marginBottom: "20px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer"
        }}
      >
        Toggle Dark Mode
      </button>

      <br />

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "260px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginBottom: "30px"
        }}
      />

      {loading ? (
        <h2>⏳ Loading Users...</h2>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "auto"
        }}>

          {filteredUsers.map(user => (
            <div
              key={user.id}
              style={{
                padding: "20px",
                borderRadius: "10px",
                background: darkMode ? "#1e1e1e" : "white",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                transition: "0.3s",
                cursor: "pointer"
              }}
            >
              <h3>{user.name}</h3>
              <p>📧 {user.email}</p>
              <p>🏢 {user.company.name}</p>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default App;