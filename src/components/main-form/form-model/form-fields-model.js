const formFieldsModel = {
  formId: 'mainForm',
  formFields: {
    cashBack: {
      name: 'cashBack',
      label: 'Выберите опцию кэшбэка',
      requiredErrorMsg: '',
    },
    fullName: {
      name: 'fullName',
      label: 'Фамилия Имя Отчество*',
      requiredErrorMsg: '',
      invalidErrorMsg: '',
    },
    fullNameDontChanged: {
      name: 'fullNameDontChanged',
      label: 'ранее не менялись',
    },
    phone: {
      name: 'phone',
      label: 'Мобильный телефон*',
      requiredErrorMsg: '',
      invalidErrorMsg: '',
    },
    smsCode: {
      name: 'smsCode',
      label: 'Код из смс',
      invalidErrorMsg: '',
    },
    email: {
      name: 'email',
      label: 'Email*',
      requiredErrorMsg: '',
      invalidErrorMsg: '',
    },
    city: {
      name: 'city',
      label: 'Выберите город, куда доставить выпущенную карту*',
      requiredErrorMsg: '',
    },
    passportSeriesNumber: {
      name: 'passportSeriesNumber',
      label: 'Серия и номер паспорта*',
      requiredErrorMsg: '',
      invalidErrorMsg: '',
    },
    birthDay: {
      name: 'birthDay',
      label: 'Дата рождения*',
    },
    fullNameLatin: {
      name: 'fullNameLatin',
      label: 'Имя и фамилия латиницей*',
    },
    nameCard: {
      name: 'nameCard',
      label: 'именная карта',
    },
    planToSpendMore: {
      name: 'planToSpendMore',
      label: 'планирую тратить по карте более 100 тыс.₽/мес',
    },
    planToWithdrawMore: {
      name: 'planToWithdrawMore',
      label: 'планирую снимать с карты более 100 тыс.₽/мес',
    },
    provideDocuments: {
      name: 'provideDocuments',
      label: 'могу предоставить подтверждающие документы',
    },
    personalData: {
      name: 'personalData',
      label: 'personalData',
      requiredErrorMsg: '',
    },
  },
};

export { formFieldsModel };