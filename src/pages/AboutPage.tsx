export function AboutPage() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-soft">
      <p className="text-sm font-bold uppercase tracking-widest text-chapter">Sobre el proyecto</p>
      <h2 className="mt-3 text-4xl font-black">NextChapter</h2>
      <p className="mt-4 max-w-3xl text-slate-600">
        NextChapter ayuda a organizar una biblioteca personal, registrar lecturas y mantener una lista clara de libros pendientes, en curso y terminados.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-paper p-5"><strong>Frontend</strong><p className="mt-2 text-sm text-slate-600">React, TypeScript, Tailwind y React Router.</p></div>
        <div className="rounded-2xl bg-paper p-5"><strong>Backend</strong><p className="mt-2 text-sm text-slate-600">Node.js y Express con arquitectura por capas.</p></div>
        <div className="rounded-2xl bg-paper p-5"><strong>API</strong><p className="mt-2 text-sm text-slate-600">Cliente tipado y endpoints REST para libros.</p></div>
      </div>
    </section>
  );
}
