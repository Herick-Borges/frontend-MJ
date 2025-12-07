import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  TeamOutlined,
  DatabaseOutlined,
  CreditCardOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import './Sidebar.scss'

export default function Sidebar() {
  const location = useLocation();
  const selectedKey = location.pathname;

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-title">
        <img src="/src/assets/logomajusystem2 1.png" alt="Logo" className="sidebar-logo" />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        className="app-menu"
        items={[
          { key: '/dashboard', icon: <DashboardOutlined />, label: <Link to="/dashboard">Dashboard</Link> },
          { key: '/cardapio', icon: <ShoppingOutlined />, label: <Link to="/cardapio">Cardápio</Link> },
          { key: '/pedidos', icon: <ShoppingCartOutlined />, label: <Link to="/pedidos">Pedidos</Link> },
          { key: '/funcionarios', icon: <TeamOutlined />, label: <Link to="/funcionarios">Funcionários</Link> },
          { key: '/base', icon: <DatabaseOutlined />, label: <Link to="/base">Base</Link> },
          { key: '/aPagar', icon: <CreditCardOutlined />, label: <Link to="/aPagar">A Pagar</Link> },
          { key: '/logout', icon: <LogoutOutlined />, label: <Link to="/">Logout</Link>, id: 'logout-item' },
        ]}
      />
    </div>
  );
}
