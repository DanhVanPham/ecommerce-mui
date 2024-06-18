import { MenuItem, Typography } from '@mui/material';
import { isEqual } from 'lodash';
import MenuPopover from '../../MenuPopover';
import FilterButtonPopover from './FilterButtonPopover';
//
/**
 * 
 * Option is an object whose properties are label and value 
 * @param {*} title Button text
 * @param {*} noOptionText text value when no options 
 * @param {*} defaultValue Value of the selected option
 * @param {*} options An array of options [{label, value}]
 * @param {*} getSelectedOption get selected option function (option) => true || false
 * @param {*} onChangeSelection Selection change event handler function(option)=>{}
 * @returns 
 */
export default function SelectionButton({ title, noOptionText = 'No options', defaultValue, options,
    getSelectedOption, onChangeSelection, sx, ...other }) {
    const selected = !getSelectedOption ? defaultValue : options?.find(opt => getSelectedOption(opt))

    return <FilterButtonPopover sx={{ flexShrink: 0, ...sx }}
        label={<>
            {title}
            {selected && <span> {`\xa0:\xa0`}
                <Typography component="span"
                    variant='body2' color='text.secondary'>
                    {selected.label}
                </Typography>
            </span>}
        </>}
        selectionPopoverRender={(props) =>
            <MenuPopover {...props}>
                {options ? options.map((option, index) => (
                    <MenuItem key={index}
                        selected={isEqual(option, selected)}
                        onClick={() => {
                            props.onClose?.();
                            onChangeSelection(option)
                        }}>
                        {option.label}
                    </MenuItem>
                )) : <MenuItem disabled>{noOptionText}</MenuItem>}
            </MenuPopover>}
        {...other} />
}