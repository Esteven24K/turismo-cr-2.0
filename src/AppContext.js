import React, { createContext, useState } from 'react';
import datos_es from './es.json';
import datos_en from './en.json';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [idioma, setIdioma] = useState('es');
  const [datos, setDatos] = useState(datos_es);

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
    if (nuevoIdioma === 'es') {
      setDatos(datos_es);
    } else if (nuevoIdioma === 'en') {
      setDatos(datos_en);
    }
  };

  return (
    <AppContext.Provider value={{ idioma, datos, cambiarIdioma }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };