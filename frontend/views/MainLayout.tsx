import {AppLayout} from '@hilla/react-components/AppLayout.js';
import {DrawerToggle} from '@hilla/react-components/DrawerToggle.js';
import {NavLink, Outlet} from 'react-router-dom';

export default function MainLayout() {

  return (
    <AppLayout className="block h-full">
      <div slot="drawer" className="p-m">
        <NavLink to="todo">Todos</NavLink>
      </div>

      <header slot="navbar" className="flex gap-m items-center">
        <DrawerToggle aria-label="Menu toggle"></DrawerToggle>
        <h1 className="text-l m-0">Todo app</h1>
      </header>
      <Outlet/>
    </AppLayout>
  );
}
