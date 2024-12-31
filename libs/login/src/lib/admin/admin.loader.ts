import { json, LoaderFunctionArgs } from '@remix-run/node';

export const adminLoader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    message: 'Hello, world!',
  });
};
