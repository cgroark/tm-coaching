export default function HomeHero({ title, intro }) {
  return (
    <section style={{ padding: "2rem" }}>
      <h1>{title}</h1>
      <p>{intro}</p>
    </section>
  );
}