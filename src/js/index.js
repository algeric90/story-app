import '../scss/main.scss';
import "./components/index";
import * as bootstrap from "bootstrap";
import Dashboard from './pages/dashboard';

const routes = {
  '/': Dashboard,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
  const route = detectRoute();
  route.init(document.querySelector('main#main-content')
);
})