import React from "react";
import { Layout, Typography } from "antd";

const { Header: AntdHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  return (
    <AntdHeader>
      <Title>Movie List App</Title>
    </AntdHeader>
  );
};

export default Header;
