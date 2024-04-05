import { data } from '../dummy/data';
import { type ComplexState } from '../types/state';
import { handleCheck } from '../utils/array';

export type Action =
  | { type: 'setSelect'; payload: string }
  | { type: 'cancel' }
  | { type: 'setCheck'; payload: number }
  | { type: 'submit' }
  | { type: 'reset' }
  | { type: 'retry' }
  | { type: 'removeSubmit' }
  | { type: 'removeCancel' }
  | { type: 'reChoose' };

export function reducer(state: ComplexState, action: Action): ComplexState {
  switch (action.type) {
    case 'setSelect':
      return state.checked.length <= 0
        ? {
            ...state,
            select: action.payload,
            modalType: {
              type: action.payload,
              open: true,
              data: data(action.payload),
            },
          }
        : {
            ...state,
            reselect: true,
            tmpSelectType: action.payload,
          };
    case 'cancel':
      return {
        ...state,
        modalType: {
          ...state.modalType,
          open: false,
        },
        confirm: true,
      };
    case 'setCheck':
      return {
        ...state,
        checked: handleCheck(action.payload, state),
      };
    case 'submit':
      return {
        ...state,
        modalType: {
          ...state.modalType,
          open: false,
        },
      };
    case 'reset':
      return {
        ...state,
        select: '',
        modalType: {
          type: '',
          open: false,
          data: [],
        },
        confirm: false,
        checked: [],
      };
    case 'retry':
      return {
        ...state,
        modalType: {
          ...state.modalType,
          open: true,
        },
        confirm: false,
      };
    case 'removeCancel':
      return {
        ...state,
        reselect: false,
        tmpSelectType: '',
      };
    case 'removeSubmit':
      return {
        ...state,
        select: state.tmpSelectType,
        modalType: {
          type: state.tmpSelectType,
          open: true,
          data: data(state.tmpSelectType),
        },
        checked: [],
        reselect: false,
        tmpSelectType: '',
      };
    case 'reChoose':
      return {
        ...state,
        modalType: {
          ...state.modalType,
          open: true,
        },
      };
    default:
      return state;
  }
}
