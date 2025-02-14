import { useEffect, type ReactElement, useState } from 'react';
import Headline from '../../ui/Headline';
import TextForm from '../../ui/TextForm';
import { Button, Stack } from '@mui/material';
import MuiDatePicker from '../../ui/MuiDatePicker';
import MuiSelect from '../../ui/MuiSelect';
import { useForm } from 'react-hook-form';
import { FormSchema, type FormSchemaType } from '../../schema';
import dayjs from 'dayjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkAfter, checkBefore } from '../../utils/Time';
import MuiRadio from '../../ui/MuiRadio';
import MuiCheckbox from '../../ui/MuiCheckbox';

const Form = (): ReactElement => {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    getValues,
    setValue,
  } = useForm<FormSchemaType>({
    defaultValues: {
      name: '',
      startDate: dayjs(),
      endDate: dayjs().add(7, 'day'),
      startTime: 9,
      endTime: 24,
      publishScope: '0',
      publishScopeIds: [],
    },
    mode: 'all',
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormSchemaType): void => {
    console.log(data);
  };

  const watchStartDate = watch('startDate');
  const watchEndDate = watch('endDate');
  const watchStartTime = watch('startTime');
  const watchEndTime = watch('endTime');
  const isBefore = checkBefore(
    watchStartDate,
    watchEndDate,
    watchStartTime,
    watchEndTime,
  );
  const isAfter = checkAfter(
    watchEndDate,
    watchStartDate,
    watchEndTime,
    watchStartTime,
  );
  const startError = errors.startDate?.message ?? errors.startTime?.message;
  const endError = errors.endDate?.message ?? errors.endTime?.message;

  const watchPublishScope = watch('publishScope');
  const watchPublishScopeIds = watch('publishScopeIds');
  const scopeError =
    errors.publishScope?.message ?? errors.publishScopeIds?.message;

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
    const initError = (): void => {
      setError('startDate', {});
      setError('endDate', {});
      setError('startTime', {});
      setError('endTime', {});
    };

    if (watchStartDate < watchEndDate) {
      initError();
    }

    if (isBefore || isAfter) {
      initError();
    }
  }, [isAfter, isBefore, setError, watchEndDate, watchStartDate]);

  useEffect(() => {
    if (watchPublishScope !== '0' && watchPublishScopeIds.length > 0) {
      setError('publishScope', {});
      setError('publishScopeIds', {});
    }
  }, [setError, watchPublishScope, watchPublishScopeIds.length]);

  const handleCheck = (checkedId: number): number[] => {
    const { publishScopeIds: ids } = getValues();
    const newIds = ids?.includes(checkedId)
      ? ids?.filter((id) => id !== checkedId)
      : [...(ids ?? []), checkedId];

    return newIds;
  };

  const [idsFieldOpen, setIdsFieldOpen] = useState(false);
  console.log(idsFieldOpen);

  const handleCheckboxFiledOpen = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setValue('publishScopeIds', []);

    if (event.target.value === '0') {
      setIdsFieldOpen(false);
    } else {
      setIdsFieldOpen(true);
    }
  };

  return (
    <>
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
              errorMessage={startError}
            />
            <MuiSelect
              name="startTime"
              control={control}
              label="開始時刻"
              errorMessage={startError}
            />

            <MuiDatePicker
              name="endDate"
              control={control}
              label="終了日"
              errorMessage={endError}
            />
            <MuiSelect
              name="endTime"
              control={control}
              label="終了時刻"
              errorMessage={endError}
            />
          </Stack>
          <MuiRadio
            name="publishScope"
            control={control}
            label="範囲"
            handleCheckboxFiledOpen={handleCheckboxFiledOpen}
          />
          <MuiCheckbox
            name="publishScopeIds"
            control={control}
            label="対象"
            errorMessage={scopeError}
            handleCheck={handleCheck}
          />
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
      </div>
    </>
  );
};
export default Form;
