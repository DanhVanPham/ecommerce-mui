import {
  Box,
  Button,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { StatusFactory, StatusPaymentFactory } from "./helper";
import { fCurrencyVND } from "../../utils/formatNumber";
import { formatDate } from "../../utils/datetime/formatHelper";
import { FormatType } from "../../utils/constants/datetime/formatType";
import Iconify from "../../components/Iconify";
import useToggle from "../../hooks/useToggle";
import OrderItems from "./OrderItems";
import { STATUS_ORDER } from "../../utils/constants";

const GroupOrder = ({ data, onCancel }) => {
  const { id, status, statusPayment, totalPriceProduct, createdDate, address } = data ?? {};

  const { toggle, onToggle } = useToggle(false);

  const hiddenId = `${id?.slice(0, 2)}xxx${id?.slice(-2)}`;

  const isProcessing = status === STATUS_ORDER.processing;

  return (
    <Box bgcolor="background.paper" p={3}>
      <Stack
        spacing={1}
        sx={{
          ...(isProcessing && {
            mb: 1,
          }),
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
          sx={{
            cursor: "pointer",
          }}
          onClick={onToggle}
        >
          <Stack direction="row" alignItems="center" spacing={0.25}>
            <IconButton size="small">
              <Iconify
                icon={
                  !toggle
                    ? "iconamoon:arrow-down-2-light"
                    : "iconamoon:arrow-up-2-light"
                }
              />
            </IconButton>
            <Stack>
              <Stack direction='row' spacing={1}
                alignItems='center'
              >
                <Typography
                  fontSize="14px"
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  #{hiddenId}
                </Typography>
                <StatusPaymentFactory status={statusPayment} />
              </Stack>
              <Box mt={0.25}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 0, sm: 1 }}
                >
                  <Typography variant="subtitle2">Ngày tạo: </Typography>
                  <Typography variant="body2">
                    {formatDate(
                      new Date(createdDate),
                      FormatType.fullDateTimeWithSecond
                    )}
                  </Typography>
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 0, sm: 1 }}
                >
                  <Typography variant="subtitle2">Địa chỉ: </Typography>
                  <Typography variant="body2">{address}</Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack>
            <StatusFactory status={status} />
            <Box alignSelf="center" mt={1}>
              <Typography fontSize="14px" fontWeight={500} color="#EB2606">
                {fCurrencyVND(totalPriceProduct)}
              </Typography>
            </Box>
          </Stack>
        </Stack>
        {isProcessing && (
          <>
            <Divider sx={{ borderStyle: "dashed" }} />
            <Button
              variant="contained"
              size="small"
              color="error"
              sx={{
                alignSelf: "flex-end",
              }}
              onClick={() => onCancel?.(data)}
            >
              Hủy đơn hàng
            </Button>
          </>
        )}
      </Stack>
      <Collapse in={toggle}>
        <Stack my={1}>
          <OrderItems id={id} isOpen={toggle} />
        </Stack>
      </Collapse>
    </Box>
  );
};

export default GroupOrder;
