import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div class="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div class="flex items-center gap-2">
          {/* <Image src="/menu.svg" class="lg:hidden w-5 h-5" alt="" /> */}

          <Link href="/">
            <Image
              src="/assets/lws-logo-black.svg"
              width={120}
              height={40}
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div class="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src="/assets/svg/avatar.svg"
          width={40}
          height={40}
          class="hidden lg:block w-[18px] h-[18px]"
          alt="login acount avatar"
        />
        <Image
          src="/assets/svg/shopping-Cart.svg"
          width={40}
          height={40}
          class="block w-5 h-5"
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
