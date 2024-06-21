import { Divider, Grid, Stack } from "@mui/material";
import React from "react";
import ProductPreview from "./ProductPreview";
import ShippingInfo from "./ShippingInfo";
import BillPreview from "./BillPreview";
import Scrollbar from "../../components/Scrollbar";
import useResponsive from "../../hooks/useResponsive";

const Content = () => {
  const isSmDown = useResponsive("down", "md");

  const renderContent = () => {
    return (
      <Stack spacing={2}>
        <ProductPreview />
        <Divider sx={{ borderStyle: "dashed" }} />
        <ShippingInfo />
      </Stack>
    );
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={7} lg={8}>
        {isSmDown && renderContent()}
        {!isSmDown && (
          <Scrollbar
            style={{
              minHeight: `calc(100vh - 260px)`,
              maxHeight: `calc(100vh - 260px)`,
            }}
          >
            {renderContent()}
          </Scrollbar>
        )}
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <BillPreview />
      </Grid>
    </Grid>
  );
};

export default Content;
