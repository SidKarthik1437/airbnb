import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      <div className="relative h-10 flex cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt=""
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm mx-2">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-2 bg-transparent outline-none text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex  h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"/>
        {/* <UsersIcon className="h-6" /> */}
        <div className="flex items-center border-2 rounded-full">
            <UserCircleIcon className="h-6 "/>
            <MenuIcon className="h-6 "/>
        </div>
      </div>
    </header>
  );
}

export default Header;
