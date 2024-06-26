import { Stack, Divider } from "@mui/material";
import { RHFTextField } from "../../../components/hook-form";
import { RHFPhoneNumber } from "../../../components/hook-form/custom";
import { DESCRIPTION_SPACING, DescriptionText } from "../styles";

// ----------------------------------------------------------------------

export default function GeneralForm() {
  return (
    <Stack spacing={2.5}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <RHFTextField
          name="username"
          size="small"
          placeholder={"Ví dụ: thuy-thu"}
          label={"Tên tài khoản"}
        />
        <RHFTextField
          name="name"
          size="small"
          placeholder={"Ví dụ: Thuy"}
          label={"Tên người dùng"}
        />
      </Stack>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <RHFPhoneNumber name="phone" size="small" label={"Số điện thoại"} />
        <RHFTextField
          name="email"
          size="small"
          InputProps={{ disabled: true }}
          label={"Địa chỉ email"}
        />
      </Stack>
      <Stack spacing={DESCRIPTION_SPACING}>
        <DescriptionText disabled>Viết điều gì đó về bạn</DescriptionText>
        <RHFTextField
          name="aboutMe"
          size="small"
          multiline
          rows={4}
          label={"Về tôi"}
        />
      </Stack>
      <Divider sx={{ borderStyle: "dashed", pt: 2 }} />
    </Stack>
  );
}
