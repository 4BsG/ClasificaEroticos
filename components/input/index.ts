export interface InputProps {
  placeholder?: string;
  icon?: string | undefined;
  className?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  type?: 'password' | 'email' | 'text' | 'checkbox' | 'number';
  action?: () => void;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
