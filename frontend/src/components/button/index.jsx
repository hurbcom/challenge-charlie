import {
    StyledButton
  } from './styles';
  
  const Button = ({
    children,
    classes,
    color,
    disabled,
    disableFocusRipple,
    endIcon,
    fullWidth = true,
    href,
    onClick = () => {},
    props,
    size,
    startIcon,
    style,
    sx,
    type,
    variant = "contained",
    width
  }) => {
    return (
      <StyledButton
        classes={classes}
        color={color}
        disabled={disabled}
        disableFocusRipple={disableFocusRipple}
        endIcon={endIcon}
        fullWidth={fullWidth}
        href={href}
        onClick={onClick}
        props={props}
        size={size}
        startIcon={startIcon}
        style={style}
        sx={sx}
        type={type}
        variant={variant}
        width={width}
      >
        {children}
      </StyledButton>
    )
  }
  
  export default Button;
  
  