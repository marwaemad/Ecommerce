import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="relative bg-white">
      <div className="flex items-center justify-between border-b-2 border-gray-100  md:justify-start md:space-x-10 p-5">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">E-Commerce</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="LOGO"
            />
          </a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <div className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>

        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a
            href="#"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            href="#"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}
