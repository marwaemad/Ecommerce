import { useRouter } from "next/router";

export default function ProductItem({ item, handleDelete }) {
  const router = useRouter();

  return (
    <>
      <div className=" flex flex-wrap items-center w-auto">
        <div className="flex-shrink-0 m-4 relative overflow-hidden bg-blue-300 rounded-lg max-w-xs shadow-lg  h-96">
          <div
            className="relative pt-10 px-10 flex items-center justify-center h-50"
            onClick={(e) => {
              e.preventDefault();
              router.push(`/product/${item?.id}`);
            }}
          >
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <img
              className="relative w-40 h-40"
              src={item?.image}
              alt={item?.name}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6 h-20">
            <span className="block opacity-75 -mb-1 capitalize">
              {item?.categoryType}
            </span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl capitalize text-ellipsis overflow-hidden whitespace-nowrap">
                {item?.name}
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $ {item?.price}
              </span>
            </div>
          </div>
          <div className="w-full justify-center p-5 flex ">
            <button className="bg-white text-blue-600 block bg-white rounded-lg ext-xs font-bold px-3 py-2 leading-none flex items-center m-2">
              Add to Cart
            </button>
            <button
              className="bg-white text-red-600 block bg-white rounded-lg ext-xs font-bold px-3 py-2 leading-none flex items-center m-2"
              onClick={(e) => {
                handleDelete(item.id);
                e.preventDefault();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
