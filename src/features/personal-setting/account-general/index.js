import { useEffect, useMemo } from 'react';
import { isEqual } from 'lodash';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//
// import useAuth from "../../../hooks/useAuth";
import UpdateAccountForm from './UpdateAccountForm';
import { useAlertReponse } from '../custom/useAlertResponse';

// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const { alertUpdateResponse } = useAlertReponse();
  // const { auth: { user } } = useAuth();
  const user = {}

  const defaultValues = {
    avatar: user?.avatar || '',
    username: user?.username || '',
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    department: user?.department || '',
    signature: user?.signature || '',
    aboutMe: user?.aboutMe || '',
    file: null,
  };

  const methods = useForm({
    // resolver: yupResolver(schema),
    defaultValues,
    mode: 'onSubmit'
  });
  const { reset } = methods;

  useEffect(() => {
    if (user) reset(defaultValues)
  }, [user])

  async function updateAvatar(data) {
    if (!data.file) return;
    // create formdata and send request
    const formData = new FormData()
    formData.append('avatar', data.file)
    try {
      // await dispatch(userApi.endpoints.updateAvatar.initiate(formData)).unwrap();
      alertUpdateResponse(true)
    } catch (error) {
      console.error(error);
      alertUpdateResponse(false)
    }
  }

  async function updateProfile(data) {
    try {
      // await dispatch(userApi.endpoints.updateProfile.initiate(data)).unwrap();
      alertUpdateResponse(true)
    } catch (error) {
      console.log(error);
      alertUpdateResponse(false)
    }
  }

  const handleSubmit = async (data) => {
    updateAvatar(data);
    updateProfile(data);
  };

  return <UpdateAccountForm
    methods={methods} onSubmit={handleSubmit} />
}
