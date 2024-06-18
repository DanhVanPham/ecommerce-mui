import { GroupBox } from "./GroupBox"

export function withGroupBox({title, ...groupBoxProps}){
    return (Component, ...props) => {
        return <GroupBox 
                title={title} 
                {...groupBoxProps}>
                    <Component {...props}/>
        </GroupBox>
    }
}