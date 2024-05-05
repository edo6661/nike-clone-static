import { getBanner } from '@/services/banner';
import Image from 'next/image';

const TestBan = async () => {
  const banner = await getBanner();

  return (
    <div>
      {banner?.content.images.map((image) =>
        <Image
          key={image}
          src={image}
          alt={image}
          width={100}
          height={100}
        />
      )}
    </div>
  )
}

export default TestBan