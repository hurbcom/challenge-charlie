import { renderHook } from '@testing-library/react-hooks';
import useBingApi from '../useBingAPI';

describe('useBing hook', () => {
  it('should return a background image', () => {
    const { result } = renderHook(() => useBingApi());
    expect(typeof result.current.backgroundImage).toBe('string');
  });
});
