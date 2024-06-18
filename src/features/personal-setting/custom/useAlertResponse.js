import { useSnackbar } from "notistack"

export const useAlertReponse = () => {
    const { enqueueSnackbar } = useSnackbar();

    function alertUpdateResponse(isSuccess) {
        if (isSuccess) return enqueueSnackbar('Update successfully')
        return enqueueSnackbar('Update failed!', { variant: 'error' })
    }

    return {
        alertUpdateResponse,
    }
}