import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click{' '}
      <Link className="text-blue-500 underline" href="/documents/123">
        &nbsp;here&nbsp;
      </Link>{' '}
      to go to document id
    </div>
  );
};

export default Home;
