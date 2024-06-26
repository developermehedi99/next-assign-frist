import Footer from "@/components/Footer";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <main>
      {/* Product section start */}
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          <Link
            href="/category"
            className="hover:border-b border-black block h-6 box-border mt-4"
          >
            All
          </Link>
          <Link
            href="/category/smartphones"
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Smartphones
          </Link>
          <Link
            href="/category/laptops"
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Laptops
          </Link>
          <Link
            href="/category/fragrances"
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Fragrances
          </Link>
          <Link
            href="/category/skincare"
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Skincare
          </Link>
          <Link
            href="/category/groceries"
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Groceries
          </Link>
        </div>
        <div>
          {/* Product 1 Start */}
          {children}
          {/* Product 1 End */}
        </div>
      </section>

      {/* Product section start */}
      <section className="bg-[#ced3ca] py-5 lg:py-16">
        <div className="w-10/12 lg:w-4/12 mx-auto">
          <h1 className="italic text-xl lg:text-3xl font-serif my-5 text-center">
            Get the inside scoop
          </h1>
          <p className="text-center text-sm lg:text-base">
            Sign up for new product drops, behind-the-scenes content, and
            monthly 5 Things Im Digging emails
          </p>
          <form action="#" className="mb-5">
            <input
              type="text"
              className="p-3 mt-10 border border-black focus:outline-none w-full"
              placeholder="Enter your email"
            />
            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-2 mt-2 text-white">
              See what we are doing
            </button>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
