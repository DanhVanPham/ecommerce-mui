import { Stack } from "@mui/material";
import { FormInputLabel } from "../../../components/custom-input";
import RHFLoadingButton from "../../../components/hook-form/RHFLoadingButton";
import { RHFTextField } from "../../../components/hook-form";
import { FormProvider } from "../../../components/hook-form";

export function AddCommentForm({ onSubmit, methods }) {
    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={"column"} spacing={1}>
                <Stack>
                    <FormInputLabel
                        label="Bình luận"
                        input={
                            <RHFTextField
                                name="comment"
                                size="small"
                                placeholder="..."
                                isRequired
                                multiline
                                minRows={3}
                            />
                        }
                        isRequired
                    />
                </Stack>
                <Stack direction={"row"} width={1}>
                    <RHFLoadingButton
                        variant="contained"
                        loading={isSubmitting}
                        loadingIndicator={"Đang đăng bình luận của bạn..."}
                        content="Bình luận"
                    />
                </Stack>
            </Stack>
        </FormProvider>
    );
}
