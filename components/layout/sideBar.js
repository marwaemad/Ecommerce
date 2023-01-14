const { default: Link } = require("next/link");

export default function SideBar() {
  return (
    <>
      <nav className="bg-white px-6 flex justify-between border-b-2 border-r-2 w-60 h-screen border-gray-100 py-6">
        <ul className="w-full flex-col text-blue-600 font-bold capitalize text-base">
          <li className="flex w-100 p-5  text-center">
            <Link href="/">All</Link>
          </li>
          <li className="flex w-100 p-5   text-center">
            <Link rel="canonical" href="/category/fashion">Fashion</Link>
          </li>
          <li className="flex w-100 p-5   text-center">
            <Link rel="canonical" href="/category/supermarket">Super Market</Link>
          </li>
          <li className="flex w-100 p-5   text-center">
            <Link rel="canonical" href="/category/home_office">Home & Office</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
