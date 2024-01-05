import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'text-white p-4 font-bold rounded-full shadow-md active:scale-95 transition duration-200 min-h-14',
  variants: {
    color: {
      primary:
        'bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-700 focus:ring-opacity-50',
      secondary:
        'bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50',
    },
    size: {
      small: 'text-sm p-2',
      base: 'text-base p-4',
      large: 'text-lg p-6 w-64',
    },
    disable: {
      true: 'pointer-events-none opacity-20',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'base',
  },
});

/**
 * Result:
 * color?: "primary" | "neutral"
 * size?: "small" | "base" | "large"
 * disable?: boolean
 */

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
  label: string;
  handleClick: () => void;
}

const TwButton = (props: ButtonProps) => {
  return (
    <>
      <button className={button(props)} onClick={props.handleClick}>
        {props.label}
      </button>
    </>
  );
};
export default TwButton;
