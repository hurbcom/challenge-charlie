'use client';

import { memo, useCallback, useMemo } from 'react';
import useCoordinates from '@/hooks/useCoordinates';

interface RootProps {
  value: string;
  loading?: boolean;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

function Input({ value, onChange, onSubmit, loading: loadingForecast }: RootProps) {
  const { fetchCity, loading } = useCoordinates({
    onSuccess(value: string) {
      onChange(value);
      onSubmit(value);
    },
  });

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(value);
    },
    [onSubmit, value]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const isDisabled = useMemo(() => loading || loadingForecast, [loading, loadingForecast]);

  return (
    <div className='flex flex-row gap-1 items-center'>
      <button
        data-testid='geo-button'
        data-icon='('
        className='w-12 h-12 text-[32px] flex justify-center items-center text-gray-700 disabled:text-gray-400 disabled:animate-spin'
        aria-label='Get geo coordinates'
        tabIndex={0}
        disabled={isDisabled}
        onClick={fetchCity}
      />
      <form onSubmit={handleSubmit} role='form' className='flex-1'>
        <label htmlFor='city' className='sr-only'>
          Digite uma cidade
        </label>
        <input
          type='text'
          id='city'
          name='city'
          placeholder='Digite uma cidade'
          className='w-full p-4 ring-0 outline-none font-semibold text-lg border-none disabled:text-gray-400 disabled:bg-white'
          autoComplete='off'
          value={value}
          disabled={isDisabled}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default memo(Input);
