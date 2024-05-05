import { Heading } from '@/components/custom/heading';
import { getBanner } from '@/services/banner';
import React, { Suspense } from 'react'
import TestBan from './_components/TestBan';

const page = () => {
  return (
    <section className="base-container">
      <Heading>
        Test
      </Heading>
      <Suspense
        fallback={<Heading>Loading...</Heading>}
      >
        <TestBan />
      </Suspense>
    </section>
  )
}

export default page