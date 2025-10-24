import { useEffect, useState } from "react";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://127.0.0.1:3000/api/v1/users/data", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await res.json();
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="user-container">
      {data.map((usr, index) => (
        <div key={index} className="card">
          <p>Name: {usr.name}</p>
          <p>Age: {usr.age}</p>
          <p>Email: {usr.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
