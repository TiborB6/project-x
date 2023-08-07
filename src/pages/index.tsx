import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectToAnotherPage() {
  const router = useRouter();

  // Redirect programmatically on the client side
  useEffect(() => {
    router.push('/home');
  }, []);

  return null; // This component won't be rendered due to the redirect.
}