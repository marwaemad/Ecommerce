import AllCategories from "./category/all";
import Sort from "../components/shared/Sort";
import { useEffect, useState } from "react";
import AddEditProduct from "../components/product/AddEditProduct";
import { useRouter } from "next/router";

export default function Home({ products }) {
  const [sortBy, setSortType] = useState("asc");
  const [closeModal, setCloseModal] = useState(false);
  const router = useRouter();
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products?_sort=price&_order=${sortBy}`)
      .then((res) => res.json())
      .then((result) => {
        setProductsData(result);
      })
      .catch(console.log);
  }, [sortBy]);

  useEffect(() => {
    setProductsData(products);
  }, [products]);

  const handleCreateProduct = (data) => {
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        refreshData();
        setCloseModal(true);
      })
      .catch((error) => {
        console.log(error);
        setCloseModal(false);
      });
  };

  const handleDeleteProduct = (id) => {
    fetch("http://localhost:3000/products/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        refreshData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };
  return (
    <>
      <div className="flex p-5 w-full justify-end ">
        <AddEditProduct
          btnName={"+ AddProduct"}
          data={{}}
          handleSubmit={(e) => handleCreateProduct(e)}
          HideModal={closeModal}
        />
        <Sort sortBy={(e) => setSortType(e)} />
      </div>
      <AllCategories
        categories={productsData}
        deleteProduct={handleDeleteProduct}
      />
    </>
  );
}
Home.getInitialProps = async ({ query }) => {
  const data = fetch(`http://localhost:3000/products`)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
    .catch(console.log);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    products: await data.then((res) => {
      return res.sort((a, b) =>
      a.name.localeCompare(b.name));
    }), // will be passed to the page component as props
  };
};
