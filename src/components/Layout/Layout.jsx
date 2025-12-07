import React from "react";
import { Layout as AntLayout } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import './Layout.scss'

const { Sider, Content } = AntLayout;

export default function Layout({ children }) {
  return (
    <AntLayout className="app-layout">
      <Sider width={240} className="app-sider">
        <Sidebar />
      </Sider>

      <AntLayout>
        <Header />
        <Content className="app-content">
          <div className="app-main">{children}</div>
        </Content>
      </AntLayout>
    </AntLayout>
  );
}
