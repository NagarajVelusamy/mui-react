import PropTypes from "prop-types";
import Button from "@mui/material/Button";


const Btn = ({
     label,
     variant,
     disabled,
     handleClick,
     size,
     ...otherProps
    }) => {
  return (
    <Button 
      variant={variant}
      disabled={disabled}
      onClick={handleClick}
      size={size}
      disableElevation
      {...otherProps}
    >
      {label}
    </Button>
  );
};

export default Btn;

Btn.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

Btn.defaultProps = {
  label: "Button",
  variant: "contained",
  size: "medium",
  disabled: false,
};
