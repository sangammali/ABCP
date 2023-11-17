const validationService = {};

// required field validation
validationService.required = (value) => {
  let isValid = 1;
  let message = '';

  if ([null, undefined, ''].includes(value)) {
    isValid = 0;
    message = 'This field is required';
  }

  return { isValid, message };
};

// email field validation
validationService.email = (value) => {
  let isValid = 1;
  let message = '';

  // const emailRegex = /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(value)) {
    message = 'Invalid email format';
    isValid = 0;
  }

  return { isValid, message };
};

// username field validation
validationService.username = (value) => {
  return {
    ...validationService.required(value),
    ...validationService.email(value),
  };
};

// username field validation

export { validationService };
