import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Radio, RadioGroup, FormHelperText, FormControlLabel, Box } from '@mui/material';

// ----------------------------------------------------------------------

RHFRadioGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
};

export default function RHFRadioGroup({ name, options, size, 
  optStyle, wrapperStyle, errorStyle, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box sx={wrapperStyle}>
          <RadioGroup {...field} row {...other}>
            {options.map((option) => (
              <FormControlLabel key={option.value}
                value={option.value}
                control={<Radio size={size} disabled={option?.shouldDisabled} />}
                label={option.label}
                sx={optStyle}
              />
            ))}
          </RadioGroup>
          {!!error && (
            <FormHelperText error sx={{ px: 2, ...errorStyle }}>
              {error.message}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
}
