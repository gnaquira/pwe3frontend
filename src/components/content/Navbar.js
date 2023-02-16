import '../styles/content.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to=''>Administrador</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='listaplatos'>Lista de Platos</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to='' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Consultas
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='registroplato'>Registro de Platos</Link></li>
                                    <li><Link className="dropdown-item" to='registrocategoria'>Registro de Categoria</Link></li>
                                    <li><Link className="dropdown-item" to='listapedidos'>Lista de Pedidos Realizados</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"> 
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='../Login'>Iniciar Sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar