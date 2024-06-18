// @mui
import { Select, MenuItem, FormControl } from '@mui/material'
import { isEmpty } from 'lodash'

export default function RangeBy({ selectedValue, rangeByOpts = [], onSubmit, trans }) {
    return (
        !isEmpty(rangeByOpts) && (
            <FormControl sx={{ my: 0.6 }} fullWidth size="small">
                <Select
                    value={selectedValue}
                    onChange={(e) => onSubmit?.(e.target.value)}>
                    {rangeByOpts.map((option, index) =>
                        <MenuItem key={index} value={option?.value}>
                            {option?.label}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        )
    )
}