import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="rounded-3xl bg-white p-8 text-center shadow-soft">
      <p className="text-7xl font-black text-chapter">404</p>
      <h2 className="mt-4 text-3xl font-black">Página no encontrada</h2>
      <p className="mt-2 text-slate-600">La ruta que buscas no existe en NextChapter.</p>
      <Link to="/" className="mt-6 inline-flex rounded-full bg-chapter px-5 py-3 font-bold text-white">Volver a la biblioteca</Link>
    </section>
  );
}
