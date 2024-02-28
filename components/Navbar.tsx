import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-400 to-blue-500 border-b-1 shadow-lg">
      <div className='flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8 py-3'>
        <div className='flex items-center'>
          <Link href="/">
            <div className='flex items-center'>
              <Image
                src='/somhako_logo.png'
                alt='Somhako'
                width={40}
                height={180}
                className='object-contain'
              />
              <h3 className='font-bold text-xl text-black-500 ml-2'>Somhako</h3>
            </div>
          </Link>
        </div>
        <h1 className='font-bold text-xl'>Notes App</h1>
      </div>
    </header>
  );
};

export default Navbar;
