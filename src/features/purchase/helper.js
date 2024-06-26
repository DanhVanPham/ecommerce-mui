import { Chip } from "@mui/material";
import { MENU_TAB } from ".";

export const StatusFactory = ({ status }) => {
    switch (status) {
        case MENU_TAB.completed:
            return (
                <Chip
                    variant="outlined"
                    size="small"
                    color="success"
                    label="Hoàn thành"
                />
            );
        case MENU_TAB.canceled:
            return (
                <Chip variant="outlined" size="small" color="error" label="Đã hủy" />
            );

        case MENU_TAB.waitingForPayment:
            return (
                <Chip
                    variant="outlined"
                    size="small"
                    color="secondary"
                    label="Chờ thanh toán"
                />
            );

        case MENU_TAB.waitingForShip:
            return (
                <Chip
                    variant="outlined"
                    size="small"
                    color="warning"
                    label="Chờ giao hàng"
                />
            );

        case MENU_TAB.shipping:
            return (
                <Chip variant="outlined" size="small" color="info" label="Đang vận chuyển" />
            );
        default:
            break;
    }
};
