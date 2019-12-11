export function addBackground(background) {
  return {
    type: '@background/ADD_BACKGROUND',
    payload: { background },
  };
}
