import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import '@/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  document.body.innerHTML = '<pre style="padding:1rem;color:red;">#root not found. Check index.html.</pre>';
  throw new Error('Root element #root not found');
}

const AppTree = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

function mount() {
  const isDev = import.meta.env.DEV;
  const onlyPlaceholder =
    rootElement.childNodes.length === 1 &&
    rootElement.childNodes[0].nodeType === Node.COMMENT_NODE;

  if (isDev || onlyPlaceholder) {
    rootElement.innerHTML = '';
    createRoot(rootElement).render(AppTree);
  } else if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, AppTree);
  } else {
    createRoot(rootElement).render(AppTree);
  }
}

try {
  mount();
} catch (err) {
  console.error(err);
  rootElement.innerHTML = `<pre style="padding:1rem;background:#1a1a1a;color:#ff6b6b;overflow:auto;">${err.message}\n\n${err.stack || ''}</pre>`;
}
