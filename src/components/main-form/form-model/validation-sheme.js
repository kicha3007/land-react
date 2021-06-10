import * as Yup from 'yup';
import { formFieldsModel } from './form-fields-model';

const {
  formFields: {
    cashBack,
    fullName,
    fullNameDontChanged,
    phone,
    smsCode,
    email,
    city,
    passportSeriesNumber,
    birthDay,
    fullNameLatin,
    nameCard,
    planToSpendMore,
    planToWithdrawMore,
    provideDocuments,
    personalData,
  },
} = formFieldsModel;

const validationSchema = [
  Yup.object().shape({
    [fullName.name]: Yup.string().required(`${fullName.requiredErrorMsg}`),
    [fullNameDontChanged.name]: Yup.boolean().oneOf([true], `${fullNameDontChanged.requiredErrorMsg}`),
    [cashBack.name]: Yup.string().nullable().required(`${cashBack.requiredErrorMsg}`),
  }),
];

export { validationSchema };