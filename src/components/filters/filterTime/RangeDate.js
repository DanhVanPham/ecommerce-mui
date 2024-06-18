// @mui
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'

export default function RangeDate({ timeTypeOpts, selectedValue, onSubmit, trans }) {
    return (
        <FormControl sx={{ my: 0.6 }} fullWidth size="small">
            <InputLabel id="filter-time-label">{trans('filterTime.rangeDate.label')}</InputLabel>
            <Select
                label={trans('filterTime.rangeDate.label')}
                value={selectedValue}
                onChange={(e) => onSubmit?.(e.target.value)}>
                {timeTypeOpts?.map((option, index) =>
                    <MenuItem key={index} value={option?.value}>
                        {option?.label}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    )
}