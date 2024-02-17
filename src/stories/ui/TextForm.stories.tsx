import { within, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import TextForm from '../../ui/TextForm';
import { delay } from '../utils';

export default {
  title: 'UI/TextForm',
  component: TextForm,
  argTypes: {
    name: {
      description: 'テキストフォームの名前',
      control: 'text',
    },
    control: {
      description: 'refs: https://react-hook-form.com/docs/useform/control',
      control: 'object',
    },
    errors: {
      description:
        'refs: https://react-hook-form.com/docs/useformstate/errormessage',
      control: 'object',
    },
  },
} as Meta;

type Story = StoryObj<typeof TextForm>;

export const Default: Story = {
  args: {
    name: '',
  },
  render: (args) => {
    const {
      control,
      formState: { errors },
    } = useForm();
    return <TextForm {...args} control={control} errors={errors} />;
  },
  play: async ({ canvasElement }) => {
    const { getByPlaceholderText } = within(canvasElement);
    // placeholderでinput要素を取得する方法
    const input = getByPlaceholderText('ここに入力する') as HTMLInputElement;

    /**
     * data-testidでinput要素を取得する方法
     * MuiのTextFieldの場合､inputProps内にdata-testidを指定することでinput要素を取得できる
     */
    // const input2 = getByTestId('text-form');

    expect(input).toBeInTheDocument();
    // テキストフォームに"hello world!!"を入力する
    fireEvent.change(input, { target: { value: 'Hello word!!' } });

    // 1秒待つ
    await delay(1000);
    // テキストフォームに"hello world!!"が入力されていること
    expect(input).toHaveValue('Hello word!!');

    //TODO: バリデーションのテストを追加する
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story: 'デフォルトのTextFormコンポーネント',
      },
    },
  },
};
