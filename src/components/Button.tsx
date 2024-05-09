export default function Button({
  caption,
  handleClick,
  selected,
}: {
  caption: string;
  handleClick: () => void;
  selected: boolean;
}) {
  const style = {
    backgroundColor: selected ? "#ffff" : "#2d0325",
    color: selected ? "#242424" : "#fff",
  };

  return (
    <button style={style} onClick={handleClick}>
      {caption}
    </button>
  );
}
