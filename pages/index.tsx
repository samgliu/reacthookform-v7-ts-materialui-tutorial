/* eslint-disable react/jsx-props-no-spreading */
// index.tsx
import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import SubComponent1 from '@src/components/SubComponent1';
import SubComponent2 from '@src/components/SubComponent2';
import styles from '../styles/Home.module.css';

interface IFormInputs {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
});

const Home: FC = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  console.log('watching variable email ', methods.watch('email'));

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log('form data is ', data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>ReceitaClient</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
            <br />
            <SubComponent1 />
            <br />
            <br />
            <SubComponent2 />
            <br />
            <input type="submit" />
          </form>
        </FormProvider>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
