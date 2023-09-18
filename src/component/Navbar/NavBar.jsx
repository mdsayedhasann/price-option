
// eslint-disable-next-line no-unused-vars
const routes = [
    { path: '/', name: 'Home', id: 1 },
    { path: '/about', name: 'About', id: 2 },
    { path: '/services', name: 'Services', id: 3 },
    { path: '/contact', name: 'Contact', id: 4 },
    { path: '/products', name: 'Products', id: 5 }
  ];

const NavBar = () => {
    return (
        <div>
            {
                routes.map(route => <li key={route.id}><a href={route.path}> {route.name} </a></li> )
            }
        </div>
    );
};

export default NavBar;