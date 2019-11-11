import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import Header from "./shared/Header/Header";
import { Home } from "./pages/Home/Home";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
