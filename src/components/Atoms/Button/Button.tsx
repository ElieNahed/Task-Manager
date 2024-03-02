interface ButtonProps {
  label: string;
  onClick: () => void;
  active: boolean;
}
const Button = ({ label, onClick, active }: ButtonProps): React.ReactNode => (
  <button className={active ? "active" : ""} onClick={onClick}>
    {label}
  </button>
);
export default Button;
