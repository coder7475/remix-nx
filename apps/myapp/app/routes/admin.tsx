import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';

import stylesUrl from '../styles/admin.css';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { adminLoader } from '@acme/login/server';

export const loader = adminLoader;

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};
export default function Admin() {
  const data = useLoaderData<typeof loader>();
  return <p>Admin works!</p>;
}
