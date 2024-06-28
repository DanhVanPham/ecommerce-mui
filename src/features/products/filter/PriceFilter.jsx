import React, { useState } from "react";
import { Box, Button, Popover, Slider, Stack, Typography } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { IOSSlider } from "./SliderCustom";
import useFilterParams from "../../../components/filters/useFilterParams";
import { FILTER_CONDITION } from "../../../layouts/constants";

const PriceFilter = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [value, setValue] = useState([0, 0]);

	const { values, setParam } = useFilterParams();
	const { defaultValues } = values ?? {};
	const defaultData = defaultValues?.[FILTER_CONDITION.rangeAge];

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleReset = () => {
		setParam(FILTER_CONDITION.rangeAge, [0, 0]);
		setValue([0, 0]);
	};

	const handleSubmit = () => {
		setParam(FILTER_CONDITION.rangePrice, value);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const isHasData =
		defaultData?.[0] !== value?.[0] || defaultData?.[1] !== value?.[1];

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
				Khoảng giá
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
						LỌC THEO GIÁ
					</Typography>
					<Box sx={{ my: 2.5, width: "272px" }}>
						<IOSSlider
							getAriaLabel={() => "Price range"}
							value={value}
							onChange={handleChange}
							valueLabelDisplay="on"
							getAriaValueText={(value) => `${value} vnđ`}
						/>
					</Box>
					<Stack
						flex={1}
						direction={{ xs: "column", sm: "row" }}
						spacing={1}
					>
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
					</Stack>
				</Box>
			</Popover>
		</>
	);
};

export default PriceFilter;
