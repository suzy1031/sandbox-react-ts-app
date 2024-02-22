import { type ReactElement, useCallback, useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button, Divider, Stack } from '@mui/material';
import useHandleModal from './hooks/useHandleModal';
import ChoiceModal from './ui/ChoiceModal';
import HtmlButton from './ui/HtmlButton';
import Headline from './ui/Headline';
import TwButton from './components/tailwindcss/TwButton';
import DsButton from './components/daisyui/DsButton';
import DsModal from './components/daisyui/DsModal';
import TextForm from './ui/TextForm';
import { useForm } from 'react-hook-form';
import { FormSchema, type FormSchemaType } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import MuiDatePicker from './ui/MuiDatePicker';
// import { InputItem } from './ui/InputItem';

const App = (): ReactElement => {
  const [count, setCount] = useState(0);
  const { open, handleOpen, handleClose } = useHandleModal();

  // TODO: hookに切り出す
  const [dsOpen, setDsOpen] = useState(false);

  const handleDsOpen = useCallback((): void => {
    setDsOpen(true);
  }, []);

  const handleDsClose = useCallback((): void => {
    setDsOpen(false);
  }, []);

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<FormSchemaType>({
    defaultValues: {
      name: '',
      startDate: dayjs(),
      endDate: dayjs().add(7, 'day'),
    },
    mode: 'all',
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormSchemaType): void => {
    console.log(data);
  };

  const watchStartDate = watch('startDate');
  const watchEndDate = watch('endDate');

  /**
   * refs:
   * https://react-hook-form.com/docs/useform/seterror
   * https://react-hook-form.com/docs/useform/register#registerRef
   * https://github.com/t-shiratori/hello-zod
   * RHFのregisterには､deps: string[]を渡すことで､他のフィールドの値を監視することができる
   *
   * ex)
   * deps: ['startDate', 'endDate']
   * -> step1: update startDate startDate > endDate -> validate startDate error
   * -> step2: after update endDate startDate < endDate -> remove startDate error
   *
   * しかし､Controllerにはdepsがないため､startDateとendDateが相互に監視できない
   * そこで､useEffectとwatchを使って監視する
   */
  useEffect(() => {
    if (watchStartDate < watchEndDate) {
      setError('startDate', {});
      setError('endDate', {});
    }
  }, [setError, watchEndDate, watchStartDate]);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Headline title="Sample Form" variant="xl" />
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextForm name="name" control={control} errors={errors} />
          <br />
          <Stack direction="row" spacing={2} sx={{ my: 2 }}>
            <MuiDatePicker
              name="startDate"
              control={control}
              label="開始日"
              errorMessage={errors.startDate?.message}
            />
            <MuiDatePicker
              name="endDate"
              control={control}
              label="終了日"
              errorMessage={errors.endDate?.message}
            />
          </Stack>
          {/* <InputItem
            register={register}
            label={'出品開始日'}
            fieldName={'startDate'}
            type={'date'}
            deps={['startDate', 'endDate']}
            errorMessage={errors.startDate?.message}
          /> */}

          {/* <InputItem
            register={register}
            label={'出品終了日'}
            fieldName={'endDate'}
            type={'date'}
            deps={['startDate', 'endDate']}
            errorMessage={errors.endDate?.message}
          /> */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ my: 2 }}
            fullWidth
            disabled={!isValid}
          >
            送信
          </Button>
        </form>
        <Divider sx={{ my: 3 }} />
        <Headline title="Vite + React" variant="xl" />
        <button
          data-qa="count-up"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <Button
          data-qa="open-modal-button"
          variant="contained"
          sx={{ mx: 2 }}
          onClick={handleOpen}
        >
          Mui Button Test
        </Button>
        <br />
        <HtmlButton
          color="mycolor2"
          label="jsdoc -> copilot生成"
          variant="outlined"
          handleClick={() => {
            console.log('click');
          }}
        />
        <br />
        <div style={{ margin: '16px 0' }} />
        <TwButton
          label="tailwind Button"
          color="primary"
          size="large"
          handleClick={() => {
            window.alert('click tailwind Button');
          }}
        />
        <br />
        <DsButton
          label="daisyui Button"
          handleClick={handleDsOpen}
          color="primary"
        />
        <DsModal open={dsOpen} modalClose={handleDsClose} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ChoiceModal open={open} handleClose={handleClose} />
    </>
  );
};

export default App;
