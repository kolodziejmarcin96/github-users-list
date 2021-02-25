import { breakpoints } from './variables';

export const media: { [name in keyof typeof breakpoints]: string } = Object.fromEntries(
  Object.entries(breakpoints).map(([name, size]) => [name, `@media (max-width: ${size}px)`]),
) as { small: string; medium: string; large: string };
