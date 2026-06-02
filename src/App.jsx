import React, { useState, useEffect } from "react";
import "./App.css";

import { Audio } from "react-loader-spinner";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      // " http://localhost:3000/",
      "https://site--deliveroo-backend--qzq5cmkqjv9w.code.run",
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>
      <Audio
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </span>
  ) : (
    <>
      <Header restaurant={data.restaurant} />
      <Main categories={data.categories} />
    </>
  );
};

export default App;
