import React from "react";
import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Popover,
	Typography,
	styled,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { mockDataBrands } from "./_mockData";

const CheckboxStyled = styled(Box)(({ theme, sx, checked }) => ({
	padding: theme.spacing(0.5),
	paddingLeft: theme.spacing(0.75),
	paddingRight: theme.spacing(0.75),
	borderRadius: theme.spacing(3),
	border: "1px solid #F1F1F1",
	minWidth: "80px",
	textAlign: "center",
	...(checked && {
		borderColor: theme.palette.primary.dark,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	}),
}));

const BrandFilter = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<>
			<Button
				variant="text"
				size="small"
				sx={{
					borderRadius: 10,
					fontSize: "1rem",
					fontWeight: 400,
					color: "#46494F",
				}}
				endIcon={
					open ? (
						<KeyboardArrowUp fontSize="small" />
					) : (
						<KeyboardArrowDown fontSize="small" />
					)
				}
				onClick={handleClick}
			>
				Thương hiệu
			</Button>
			<Popover
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<Box sx={{ p: 3, width: 1, maxWidth: "400px" }}>
					<Typography fontSize="12px" fontWeight={300}>
						LỌC THEO THƯƠNG HIỆU
					</Typography>
					<FormControl
						component="fieldset"
						variant="standard"
						sx={{ mt: 2.5 }}
					>
						<FormGroup
							sx={{
								display: "flex",
								flexDirection: "row",
								rowGap: 2,
								columnGap: 2.5,
								flexWrap: "wrap",
							}}
						>
							{mockDataBrands.map((brand) => (
								<FormControlLabel
									key={brand.id}
									control={
										<Checkbox
											checked
											// onChange={handleChange}
											name={brand.name}
											sx={{ display: "none" }}
										/>
									}
									label={
										<CheckboxStyled checked>
											{brand.name}
										</CheckboxStyled>
									}
									sx={{
										display: "inline-block",
										m: 0,
									}}
								/>
							))}
						</FormGroup>
					</FormControl>
				</Box>
			</Popover>
		</>
	);
};

export default BrandFilter;
