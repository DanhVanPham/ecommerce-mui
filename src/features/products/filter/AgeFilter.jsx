import React, { useState } from "react";
import { Box, Button, Popover, Slider, Stack, Typography } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { IOSSlider } from "./SliderCustom";
import useFilterParams from "../../../components/filters/useFilterParams";
import { FILTER_CONDITION } from "../../../layouts/constants";

const AgeFilter = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [value, setValue] = useState([0, 0]);

	const { values, setParam } = useFilterParams();
	const { [FILTER_CONDITION.rangeAge]: rangeAge, defaultValues } =
		values ?? {};
	const defaultData = defaultValues?.[FILTER_CONDITION.rangeAge];

	console.log(values);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleSubmit = () => {
		console.log(value);
		setParam(FILTER_CONDITION.rangeAge, value);
		handleClose();
	};

	const handleReset = () => {
		setParam(FILTER_CONDITION.rangeAge, defaultData);
		setValue(defaultData);
		handleClose();
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const isHasData =
		defaultData?.[0] !== rangeAge?.[0] ||
		defaultData?.[1] !== rangeAge?.[1];

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
					<Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{
								borderRadius: 100,
							}}
							onClick={handleSubmit}
						>
							Áp dụng
						</Button>
						{isHasData && (
							<Button
								variant="outlined"
								color="error"
								size="small"
								sx={{
									borderRadius: 100,
								}}
								onClick={handleReset}
							>
								Đặt lại
							</Button>
						)}
					</Stack>
				</Box>
			</Popover>
		</>
	);
};

export default AgeFilter;
