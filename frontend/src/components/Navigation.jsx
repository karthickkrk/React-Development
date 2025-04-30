import { Link } from 'react-router-dom';

const Navigation = ({ 
    items = [
      { id: 1, path: '/home', label: 'Home' },
      { id: 2, path: '/product', label: 'Product' },
      { id: 3, path: '/contact', label: 'Contact' }
    ],
    className = "px-4 pt-4",
    ulClassName = "flex gap-4 items-center justify-center",
    linkClassName = "text-slate-700 hover:text-blue-600 transition-colors duration-200"
  }) => {
  return (
    <>
    <nav className={className}>
      <ul className={ulClassName}>
        {items.map(({ id, path, label }) => (
          <li key={id}>
            <Link 
              to={path}
              className={linkClassName}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </>
  )
}

export default Navigation