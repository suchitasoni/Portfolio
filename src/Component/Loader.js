import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import '../Loader.scss';

const Loader = ({mounted, children}) => {


  return mounted ? createPortal(
    children,
    document.getElementById('loader-root') // This element needs to exist in your index.html
  ) : null;
};

export default Loader;