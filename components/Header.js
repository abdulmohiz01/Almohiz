//next-image
import Image from "next/image";
//next Link
import Link from "next/link";
//components
import Socials from '../components/Socials';


const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        {/* logo */}
        <Link href={'/'}>
          <Image src={'/abdul-mohiz-3-white.png'} width={240} height={49} alt="Logo" ></Image>
        </Link>
        {/* socials */}
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
