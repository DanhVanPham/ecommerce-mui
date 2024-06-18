import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { Card } from '@mui/material';
// routes
// utils
import ChangePasswordForm from './ChangePasswordForm';
//
import { CardTitle } from '../styles';

// ----------------------------------------------------------------------

const defaultValues = {
  oldPassword: '',
  newPassword: '',
  newPasswordConfirm: '',
};
export default function ChangePassword() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()

  const methods = useForm({
    // resolver: yupResolver(ChangePassWordSchema(trans)),
    defaultValues,
    mode: 'onSubmit'
  });

  const handleSubmit = async (data) => {
    try {
      // await dispatch(userApi.endpoints.changePassword.initiate(data)).unwrap()
      enqueueSnackbar('Update successfully');
      // navigate(PATH_AUTH.login, { replace: true });
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Update failed!', { variant: 'error' });
    }
  };

  return (
    <Card sx={{ p: 2 }}>
      <CardTitle>{'Change password'}</CardTitle>
      <ChangePasswordForm
        methods={methods} onSubmit={handleSubmit} />
    </Card>
  )
}