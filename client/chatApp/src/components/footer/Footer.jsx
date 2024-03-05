import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto">
        <div className="text-white font-bold">Footer</div>
        <nav className="mt-4">
          <ul className="flex">
            <li>
              <NavLink 
                to="/"
                activeClassName="bg-blue-500"
                className="block py-2 px-4 text-white hover:bg-gray-700 rounded"
              >
                Home
              </NavLink>
            </li>
            <li className="ml-4">
              <NavLink 
                to="/login"
                activeClassName="bg-blue-500"
                className="block py-2 px-4 text-white hover:bg-gray-700 rounded"
              >
                Login
              </NavLink>
            </li>
            <li className="ml-4">
              <NavLink 
                to="/register"
                activeClassName="bg-blue-500"
                className="block py-2 px-4 text-white hover:bg-gray-700 rounded"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
