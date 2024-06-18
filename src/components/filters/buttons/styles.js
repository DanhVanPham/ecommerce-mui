import { Box, Paper, styled } from "@mui/material"

const FilterContainerStyle = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    rowGap: theme.spacing(1),
}))
//
const FilterHeaderStyle = styled(Box)(({ theme }) => ({
    display: "inline-flex",
    columnGap: theme.spacing(0.5),
    alignItems: "center"
}))
//
const FilterBodyStyle = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    rowGap: theme.spacing(2.5),
}))
//
const FilterConditionStyle = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2),
}))

export {
    FilterConditionStyle,
    FilterBodyStyle,
    FilterHeaderStyle,
    FilterContainerStyle 
}