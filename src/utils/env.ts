import { z } from 'zod';

const schema = z
  .object({
    OPEN_WEATHER_API_KEY: z.string(),
    OPEN_CAGE_API_KEY: z.string(),
  })
  .required();

const envParsed = schema.safeParse({
  OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
  OPEN_CAGE_API_KEY: process.env.OPEN_CAGE_API_KEY,
});

if (envParsed.success === false) {
  console.error('❌ Invalid environment variables:\n');
  throw new Error('Invalid environment variables');
}

export const env = { ...envParsed.data };
