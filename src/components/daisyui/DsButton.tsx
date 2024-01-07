import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'btn rounded-full',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white hover:bg-blue-700',
      primaryOutline:
        'bg-transparent text-blue-500 border-blue-500 hover:bg-blue-100 hover:opacity-50',
      secondary: 'bg-transparent text-black border-black',
      error: 'bg-red-500 text-white hover:bg-red-700',
    },
    size: {
      sm: 'min-h-12',
      md: 'min-h-14',
    },
    disable: {
      true: 'pointer-events-none opacity-20 bg-slate-400 text-black',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
  label: string;
  handleClick: () => void;
}

const DsButton = (props: ButtonProps) => {
  return (
    <button type="button" className={button(props)} onClick={props.handleClick}>
      {props.label}
    </button>
  );
};
export default DsButton;
