import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Login from "./pages/Login/Login.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Cardapio from "./pages/Cardapio/Cardapio.jsx";
import Funcionarios from "./pages/Funcionarios/Funcionarios.jsx";
import Pedidos from "./pages/Pedidos/Pedidos.jsx";
import Base from "./pages/Base/Base.jsx";
import APagar from "./pages/APagar/APagar.jsx";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/cardapio"
        element={
          <Layout>
            <Cardapio />
          </Layout>
        }
      />

      <Route 
      path="/pedidos"
      element={
        <Layout>
          <Pedidos />
        </Layout>
      }
      />

      <Route
        path="/funcionarios"
        element={
          <Layout>
            <Funcionarios />
          </Layout>
        }
      />
      
      <Route 
        path="/base"
        element={
          <Layout>
            <Base />
          </Layout>
        }
      />

      <Route
      path="/aPagar"
      element={
        <Layout>
          <APagar />
        </Layout>
      }
      />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}
