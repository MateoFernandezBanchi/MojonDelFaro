import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Desplaza la página al principio cuando cambie la ruta
    }, [location.pathname]);
}
