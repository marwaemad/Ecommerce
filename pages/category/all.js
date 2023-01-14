import { useEffect, useState } from "react";
import ProductItem from "../../components/shared/productItem";

function AllCategories({ categories, deleteProduct }) {
  const [categoriesData, setCategoriesData] = useState(categories);
  useEffect(() => {
    setCategoriesData(categories);
  }, [categories]);
  return (
    <>
      <div className="flex flex-row flex-wrap w-full ">
        {categoriesData?.length > 0 ? (
          categoriesData?.map((item, index) => {
            return (
              <ProductItem
                item={item}
                key={index}
                handleDelete={deleteProduct}
              />
            );
          })
        ) : (
          <div> no Products </div>
        )}
      </div>
    </>
  );
}

export default AllCategories;
