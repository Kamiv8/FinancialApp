import * as yup from 'yup';

export const LoginValidation = yup.object().shape({
  email: yup.string().email().required('This field is required'),
  password: yup
    .string()
    .min(8, 'Min value is 8 letter.')
    .max(20, 'Max value is 20 letter.')
    .required('This field is required.'),
});

export const RegisterValidation = yup.object().shape({
  email: yup.string().email().required('This field is required.'),
  password: yup
    .string()
    .min(8, 'Min value is 8 letter.')
    .max(20, 'Max value is 20 letter.')
    .required('This field is required.'),
  confimPassword: yup
    .string()
    .min(8, 'Min value is 8 letter.')
    .max(20, 'Max value is 20 letter.')
    .required('This field is required.')
    .oneOf(
      [yup.ref('password')],
      'Your second password is not equal to passowrd.',
    ),
});
