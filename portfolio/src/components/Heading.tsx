export default function Heading({ children }: { children: string }) {
  return (
    <header>
      <h2 className="h2">{children}</h2>
      <span className="bar" />
    </header>
  );
}