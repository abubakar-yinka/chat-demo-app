/* eslint-disable no-unused-vars */
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/react';

interface FormProms {
  formLabel: string;
  placeholder: string;
  formName: string;
  btnText: string;
  handleFormSubmit: (userName: string) => void;
}

type FormValues = {
  [key: string]: any;
};

const HookForm: React.FC<FormProms> = ({
  formLabel,
  placeholder,
  formName,
  btnText,
  handleFormSubmit,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      userName: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    handleFormSubmit(values.userName);
  };

  const isError = (errors: any): boolean => {
    if (errors && errors[formName]) return true;
    return false;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={isError(errors)}>
        <FormLabel htmlFor={formName}>{formLabel}</FormLabel>
        <Input
          id={formName}
          placeholder={placeholder}
          {...register(formName, {
            required: 'This is required',
            minLength: { value: 2, message: 'Minimum length should be 2' },
          })}
        />
        <FormErrorMessage>
          {isError(errors) && ((errors[formName] as any).message as any)}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        colorScheme="teal"
        isLoading={isSubmitting}
        type="submit"
        disabled={isError(errors)}
      >
        {btnText}
      </Button>
    </form>
  );
};

export default HookForm;
