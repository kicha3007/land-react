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

const formInitialValues = {
  [cashBack.name]: '',
  [fullName.name]: 'dfdfdf',
  [fullNameDontChanged.name]: true,
  [phone.name]: '',
  [smsCode.name]: '',
  [email.name]: '',
  [city.name]: '',
  [passportSeriesNumber.name]: '',
  [birthDay.name]: '',
  [fullNameLatin.name]: '',
  [nameCard.name]: true,
  [planToSpendMore.name]: true,
  [planToWithdrawMore.name]: true,
  [provideDocuments.name]: false,
  [personalData.name]: true,
};

export { formInitialValues };