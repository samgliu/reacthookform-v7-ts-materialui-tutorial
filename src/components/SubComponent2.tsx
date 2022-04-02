/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const SubComponent2: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        name="firstname"
        control={control}
        defaultValue="Sam"
        render={({ field }) => (
          <TextField
            {...field}
            label="FirstName"
            variant="outlined"
            error={!!errors.firstname}
            helperText={errors.firstname ? errors.firstname?.message : ''}
          />
        )}
      />
      <br />
      <br />
      <Controller
        name="lastname"
        defaultValue="L"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="LastName"
            variant="outlined"
            error={!!errors.lastname}
            helperText={errors.lastname ? errors.lastname?.message : ''}
          />
        )}
      />
    </>
  );
};

export default SubComponent2;
