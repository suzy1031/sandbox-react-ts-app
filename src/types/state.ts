export interface ComplexState {
  select: string;
  modalType: {
    type: string;
    open: boolean;
    data: Array<{
      id: number;
      name: string;
    }>;
  };
  checked: number[];
  confirm: boolean;
  reselect: boolean;
  tmpSelectType: string;
}

export const complexInit: ComplexState = {
  select: '',
  modalType: { type: '', open: false, data: [] },
  checked: [],
  confirm: false,
  reselect: false,
  tmpSelectType: '',
};
