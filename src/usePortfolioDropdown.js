import { useEffect } from 'react';
export function usePortfolioDropdown() {
  useEffect(() => {
    const dropdowns = [...document.querySelectorAll('.dropdown')];
    const close = d => {
      d.querySelector('.dropdown-menu')?.classList.remove('show');
      const button = d.querySelector('.dropdown-toggle');
      if (button) button.setAttribute('aria-expanded', 'false');
      const arrow = d.querySelector('.dropdown-arrow');
      if (arrow) arrow.textContent = '▼';
    };
    const cleanups = dropdowns.map(d => {
      const button = d.querySelector('.dropdown-toggle');
      const menu = d.querySelector('.dropdown-menu');
      const arrow = d.querySelector('.dropdown-arrow');
      const click = e => {
        e.stopPropagation();
        const open = menu.classList.toggle('show');
        button.setAttribute('aria-expanded', String(open));
        if (arrow) arrow.textContent = open ? '▲' : '▼';
      };
      button?.addEventListener('click', click);
      return () => button?.removeEventListener('click', click);
    });
    const outside = e => { if (!e.target.closest('.nav-links')) dropdowns.forEach(close); };
    const escape = e => { if (e.key === 'Escape') dropdowns.forEach(close); };
    document.addEventListener('click', outside);
    document.addEventListener('keydown', escape);
    return () => { cleanups.forEach(fn => fn()); document.removeEventListener('click', outside); document.removeEventListener('keydown', escape); };
  }, []);
}
