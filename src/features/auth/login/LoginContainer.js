import { useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// form
import { useForm } from 'react-hook-form';
// notistack
import { useSnackbar } from 'notistack';
// others
import { LoginForm } from './LoginForm';
import { useDispatch } from '../../../app/store';

// ----------------------------------------------------------------------
const defaultValues = {
  username: '',
  password: '',
  remember: true,
};
export default function LoginContainer() {
  // define hooks
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const methods = useForm({
    // resolver: yupResolver(schema),
    defaultValues,
    mode: 'onSubmit'
  });

  const { setError } = methods;

  // handle logic
  const onSubmit = async (data) => {
    try {
      // await dispatch(authApi.endpoints.login.initiate(data)).unwrap();
      enqueueSnackbar('Login successfully');
    } catch (error) {
      showLoginError(error);
    }
  };

  // get message of error
  const showLoginError = (error) => {
    enqueueSnackbar('Login failed!', { variant: 'error' });
  }
  // render
  return <LoginForm
    onSubmit={onSubmit}
    methods={methods} />
}