import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';

import stylesUrl from '../styles/admin.css';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    message: 'Hello, world!',
  });
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};
export default function Admin() {
  const data = useLoaderData<typeof loader>();
  return <p>Admin works!</p>;
}
