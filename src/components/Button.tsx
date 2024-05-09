export default function Button({
  caption,
  handleClick,
}: {
  caption: string;
  handleClick: () => void;
}) {
  return <button onClick={handleClick}>{caption}</button>;
}
