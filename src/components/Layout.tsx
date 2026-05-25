import { BookOpen, Library } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

export function Layout() {
  const linkClass = ({ isActive }: { isActive: boolean }) => `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-chapter text-white' : 'text-ink hover:bg-white'}`;

  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-10 border-b border-white/70 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-chapter p-3 text-white shadow-soft">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-xl font-black">NextChapter</h1>
              <p className="text-sm text-slate-600">Tu biblioteca personal</p>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <NavLink to="/" className={linkClass}>Biblioteca</NavLink>
            <NavLink to="/about" className={linkClass}>Proyecto</NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
      <footer className="mx-auto flex max-w-6xl items-center gap-2 px-4 pb-8 text-sm text-slate-500">
        <Library size={16} /> Aplicación fullstack React, TypeScript y Express.
      </footer>
    </div>
  );
}
