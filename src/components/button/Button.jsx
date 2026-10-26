export default function Button({ buttonName, type = "buttons",...props }) {
  return (
    <button type={type} {...props}>{buttonName}</button>
  );
}