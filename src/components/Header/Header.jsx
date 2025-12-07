import React from 'react'
import { Layout } from 'antd'
import { HomeOutlined, DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  TeamOutlined,
  DatabaseOutlined,
  CreditCardOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'
import './Header.scss'

const { Header: AntHeader } = Layout

const routeMap = {
  '/': { title: 'Home', icon: <HomeOutlined /> },
  '/dashboard': { title: 'Dashboard', icon: <DashboardOutlined /> },
  '/cardapio': { title: 'Cardápio', icon: <ShoppingOutlined /> },
  '/pedidos': { title: 'Pedidos', icon: <ShoppingCartOutlined /> },
  '/funcionarios': { title: 'Funcionários', icon: <TeamOutlined /> },
  '/base': { title: 'Base', icon: <DatabaseOutlined /> },
  '/aPagar': { title: 'A Pagar', icon: <CreditCardOutlined /> },
}

export default function Header() {
  const location = useLocation()
  const path = location.pathname
  const current = routeMap[path] || { title: path === '/' ? 'Home' : path.replace('/', ''), icon: <HomeOutlined /> }

  return (
    <AntHeader className="app-header">
      <div className="header-left">
        <span className="page-icon">{current.icon}</span>
        <span className="sep">/</span>
        <span className="page-title">{current.title}</span>
      </div>
    </AntHeader>
  )
}


