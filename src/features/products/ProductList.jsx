import { Grid, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import ProductItem from "./Item";
import { useFilterProductsQuery } from "../../app/services/product-item/productItemApi";
import StateManager, { specifyState } from "../../components/StateManager";
import ProductSkeleton from "./ProductSkeleton";
import ErrorAlert from "../../components/ErrorAlert";
import useFilterParams from "../../components/filters/useFilterParams";
import { isFormDataEmpty, transformParams } from "./helpers";

const ProductList = () => {
	const { values } = useFilterParams();

	const formData = useMemo(() => transformParams(values), [values]);

	const queryString = useMemo(() => {
		const params = new URLSearchParams();
		for (let pair of formData.entries()) {
			params.append(pair[0], pair[1]);
		}
		return params.toString();
	}, [formData]);

	const responseProducts = useFilterProductsQuery(queryString, {
		skip: isFormDataEmpty(formData),
	});
	const { data } = responseProducts;

	const state = specifyState(responseProducts);

	return (
		<Stack flex={1}>
			<Typography
				fontSize="24px"
				fontWeight={400}
				lineHeight="36px"
				my={3}
			>
				Sản phẩm
			</Typography>
			<Grid container spacing={2}>
				<StateManager
					state={state}
					loadingState={<ProductSkeleton />}
					errorState={
						<Grid item xs={12}>
							<ErrorAlert />
						</Grid>
					}
				>
					{data?.map((product, idx) => (
						<Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
							<ProductItem data={product} />
						</Grid>
					))}
				</StateManager>
			</Grid>
		</Stack>
	);
};

export default ProductList;
