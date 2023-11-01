import React from 'react';
import '../LoadingPague/LoadingPage.css'; 

function LoadingPage() {
  return (
    <div className="loading">
      <h1>Cargando<span className="dots">...</span></h1>
    </div>
  );
}

export default LoadingPage;
