import * as yup from 'yup';
import { emailRegExp, phoneRegExp } from '../../constants';

export default function createOrderSchema() {
    return yup.object().shape({
        firstName: yup.string().required('Tên là bắt buộc!'),
        lastName: yup.string().required('Họ là bắt buộc!'),
        phoneNumber: yup.string().required('Số điện thoại là bắt buộc!')
            .matches(phoneRegExp, {
                excludeEmptyString: true,
                message: 'Số điện thoại không hợp lệ!',
            }),
        email: yup.string().required('Email là bắt buộc!')
            .matches(emailRegExp, 'Email không hợp lệ!'),
        address: yup.string().required('Địa chỉ là bắt buộc!'),
    })
}