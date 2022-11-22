import {AppLayout} from '@hilla/react-components/AppLayout.js';
import {DrawerToggle} from '@hilla/react-components/DrawerToggle.js';
import {NavLink, Outlet} from 'react-router-dom';
import './MainLayout.css';

export default function MainLayout() {
  return (
    <AppLayout className="block h-full">
      <div slot="drawer" className="p-m">
        <ul className="list-none px-0">
          <li><NavLink to="">Todos</NavLink></li>
          <li><NavLink to="about">About</NavLink></li>
        </ul>
      </div>

      <header slot="navbar" className="flex gap-m items-center">
        <DrawerToggle aria-label="Menu toggle"></DrawerToggle>
        <h1 className="text-l m-0">Todo app</h1>
      </header>
      <Outlet/>
    </AppLayout>
  );
}
