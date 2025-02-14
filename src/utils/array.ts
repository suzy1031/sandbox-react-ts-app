import { type ComplexState } from '../types/state';

export const handleCheck = (
  checkedId: number,
  state: ComplexState,
): number[] => {
  const newIds = state.checked.includes(checkedId)
    ? state.checked.filter((id) => id !== checkedId)
    : [...(state.checked ?? []), checkedId];

  return newIds;
};
