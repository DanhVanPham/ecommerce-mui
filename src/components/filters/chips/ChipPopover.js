import PropTypes from 'prop-types'
import { useRef, useState } from "react"
import ChipButton from "./ChipButton";

export default function ChipPopover({ optionRender, label, ...props }){
    const chipRef = useRef()
    const [open, setOpen] = useState(null)

    const openPop = () => setOpen(chipRef.current)
    const closePop = () => setOpen(null)

    return <>
        <ChipButton ref={chipRef} label={label}
            open={open} onOpen={openPop} {...props} />
        {open && optionRender({ 
            open: Boolean(open), 
            anchorEl: open, 
            onClose: closePop,
        })}
    </> 
}