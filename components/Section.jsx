export default function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="grid gap-8 md:grid-cols-[11rem_1fr] md:gap-12">
        <h2 id={`${id}-title`} className="font-display text-3xl md:sticky md:top-24 md:self-start md:text-4xl">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
