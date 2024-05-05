"use client"
import Spinner from '@/components/Spinner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const PageLink = () => {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const handleRedirect = () => {
    setIsRedirecting(true);
    router.push('/page');
  }
  return (

    <div className="base-container">
      {isRedirecting && <Spinner />}
      <Button
        onClick={handleRedirect}
      >
        Page
      </Button>
    </div>
  )
}

export default PageLink