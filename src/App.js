import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, updateData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/data")
      .then(res => {
        updateData(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <Layout>
      <Header />
      <Dashboard items={data} />
    </Layout>
  );
}

export default App;
