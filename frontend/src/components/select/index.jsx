import { MenuItem } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import {
  StyledTextField
} from '../textField/styles';

const Select = ({
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
  label,
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
          <InputAdornment position="start" sx={{ color: 'action.active', mr: 1, my: 0.5 }}>
            {startIcon}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end" sx={{ color: 'action.active', mr: 1, my: 0.5 }}>
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
      select
      size={size}
      style={style}
      sx={sx}
      type={type}
      value={value}
      variant={variant}
      width={width}
    >
        <MenuItem>Teste</MenuItem>
        <MenuItem>Teste</MenuItem>
    </StyledTextField>
  )
}

export default Select;
