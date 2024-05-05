import Link from 'next/link';
import { useRouter } from 'next/router';


const PageLink = () => {
  const router = useRouter();
  router.events.on('routeChangeStart', () => {
  });
  return (
    <Link href="/page">
      Ban
    </Link>
  )
}

export default PageLink