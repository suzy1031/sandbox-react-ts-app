// import { type ReactElement, type ChangeEvent } from 'react';
// import { type UseFormRegister } from 'react-hook-form';
// import { type FormSchemaType } from '../schema';

// interface Props {
//   register: UseFormRegister<FormSchemaType>;
//   label: string;
//   fieldName: keyof FormSchemaType;
//   errorMessage?: string;
//   type?: 'text' | 'number' | 'date';
//   handleChange?: (e: ChangeEvent) => void;
//   deps?: string[];
// }

// export const InputItem = ({
//   register,
//   label,
//   fieldName,
//   errorMessage,
//   type = 'text',
//   handleChange,
//   deps,
// }: Props): ReactElement => {
//   return (
//     <div className="inputItem">
//       <label htmlFor={fieldName}>{label}</label>
//       <div className="inputWrapper">
//         <input
//           // eslint-disable-next-line react/jsx-props-no-spreading
//           {...register(fieldName, {
//             valueAsNumber: type === 'number',
//             onChange: (e) => {
//               // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//               handleChange?.(e);
//             },
//             deps,
//           })}
//           type={type}
//           id={fieldName}
//           name={fieldName}
//         ></input>
//         <p className="error">{errorMessage}</p>
//       </div>
//     </div>
//   );
// };
