export function updateUnit(unit) {
  return {
    type: '@unit/UPDATE_UNIT',
    payload: { unit },
  };
}
