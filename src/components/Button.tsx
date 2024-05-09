export default function Button({
  caption,
  handleClick,
  selected,
}: {
  caption: string;
  handleClick: () => void;
  selected: boolean;
}) {
  return (
    <button
      className={selected ? "button-selected" : "button-not-selected"}
      onClick={handleClick}
    >
      {caption}
    </button>
  );
}
