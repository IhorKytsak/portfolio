import './styles.scss';

const Button = ({ children, isDisabled, type = 'button', styles, ...rest }) => {
  return (
    <button
      style={{ ...styles }}
      className='customButton'
      disabled={isDisabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
