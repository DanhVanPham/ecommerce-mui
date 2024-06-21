import React from "react";
import { Box, Button, Popover, Slider, Typography } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { IOSSlider } from "./SliderCustom";

const AgeFilter = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [value, setValue] = React.useState([0, 20]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

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
				Độ tuổi
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
				<Box sx={{ p: 3 }}>
					<Typography fontSize="12px" fontWeight={300}>
						LỌC THEO TUỔI
					</Typography>
					<Box sx={{ my: 2.5, width: "272px" }}>
						<IOSSlider
							getAriaLabel={() => "Age range"}
							value={value}
							onChange={handleChange}
							valueLabelDisplay="on"
							getAriaValueText={(value) => `${value} tuổi`}
						/>
					</Box>
					<Button
						variant="contained"
						color="primary"
						sx={{
							width: 100,
							borderRadius: 100,
						}}
					>
						Áp dụng
					</Button>
				</Box>
			</Popover>
		</>
	);
};

export default AgeFilter;
