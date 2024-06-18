import { FormControlLabel, FormHelperText, Stack, FormGroup, Checkbox } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export function RHFOtherCheckbox({ option, checked, onChange, otherTextField, sxFomrControlLabel, styleCheckbox }) {
    return (
        <Stack direction="row" spacing={2}>
            <FormControlLabel
                value={option.id}
                control={<Checkbox checked={checked} onChange={onChange} {...styleCheckbox} />}
                label={option.name}
                sx={{ height: '40px', ...sxFomrControlLabel }}
            />
            {otherTextField}
        </Stack>
    );
}

export default function RHFCheckboxGroup({
    name,
    options,
    isOtherOptionIncluded = false,
    otherTextField,
    sxFomrControlLabel,
    styleCheckbox,
    ...props
}) {
    const { control } = useFormContext();
    const optionsNotIncludedOther = isOtherOptionIncluded ? options.slice(0, options.length - 1) : [...options]
    const optionOther = options.slice(-1)[0]

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value: selectedIds }, fieldState: { error } }) => {
                function isSelected(optionId) {
                    return selectedIds?.includes(optionId);
                }

                const handleSelectedChange = (id, value) => {
                    let newList;
                    if (value) newList = [id, ...selectedIds] // add to list
                    else {
                        newList = selectedIds?.filter(opId => opId !== id)
                    }
                    onChange(newList);
                }

                return (
                    <div>
                        <FormGroup sx={{ pl: 2 }} row {...props} >
                            {optionsNotIncludedOther.map((option) => (
                                <FormControlLabel key={option.id}
                                    value={option.id}
                                    control={<Checkbox
                                        checked={isSelected(option.id)}
                                        onChange={(e) => handleSelectedChange(option.id, e.target.checked)}
                                        {...styleCheckbox} />}
                                    label={option.name}
                                    sx={{ height: '40px', ...sxFomrControlLabel }}
                                />
                            ))}
                            {isOtherOptionIncluded &&
                                <RHFOtherCheckbox
                                    option={optionOther}
                                    checked={isSelected(optionOther.id)}
                                    onChange={(e) => handleSelectedChange(optionOther.id, e.target.checked)}
                                    otherTextField={otherTextField}
                                    sxFomrControlLabel
                                    styleCheckbox={styleCheckbox}
                                />
                            }
                        </FormGroup>
                        {!!error && (
                            <FormHelperText error sx={{ px: 2 }}>
                                {error.message}
                            </FormHelperText>
                        )}
                    </div>
                )
            }}
        />
    );
}