import React from 'react'
import { RootStyle } from './styles'

export function ConditionsContainer({ children, ...others }) {
    return (
        <RootStyle {...others}>
            {children}
        </RootStyle>
    )
}
export default ConditionsContainer 
