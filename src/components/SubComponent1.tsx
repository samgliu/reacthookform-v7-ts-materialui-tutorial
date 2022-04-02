/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const SubComponent1: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        name="email"
        control={control}
        defaultValue="example@test.ttt.com"
        render={({ field }) => (
          <TextField
            {...field}
            type="email"
            label="email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email ? errors.email?.message : ''}
          />
        )}
      />
      <br />
      <br />
      <Controller
        name="password"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="password"
            label="password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ''}
          />
        )}
      />
    </>
  );
};

export default SubComponent1;
