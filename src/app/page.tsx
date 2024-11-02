import Image from 'next/image';

export default function Home() {
  return (
    <div className="container h-screen mx-auto">
      <Image src="/next.svg" alt="next icon" width={200} height={200} />
    </div>
  );
}
