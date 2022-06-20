import InputAdornment from '@mui/material/InputAdornment';

import {
  StyledTextField
} from './styles';

const TextField = ({
  autoComplete,
  autoFocus,
  children,
  classes,
  color,
  defaultValue,
  disabled,
  endIcon,
  error,
  FormHelperTextProps,
  fullWidth,
  helperText,
  id,
  InputLabelProps,
  InputProps,
  inputProps,
  inputRef,
  label = "TextField",
  maxRows,
  minRows,
  multiline,
  name,
  onBlur,
  onFocus,
  onChange,
  placeholder,
  required,
  rows,
  startIcon,
  select,
  size = "small",
  style,
  sx,
  type,
  value,
  variant = "outlined",
  width
}) => {
  return (
    <StyledTextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      classes={classes}
      color={color}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      FormHelperTextProps={FormHelperTextProps}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      InputLabelProps={InputLabelProps}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {startIcon}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="start">
            {endIcon}
          </InputAdornment>
        ),
      }}
      inputProps={inputProps}
      inputRef={inputRef}
      label={label}
      multiline={multiline}
      name={name}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      maxRows={maxRows}
      minRows={minRows}
      select={select}
      size={size}
      style={style}
      sx={sx}
      type={type}
      value={value}
      variant={variant}
      width={width}
    />
  )
}

export default TextField;
