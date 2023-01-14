import ProductItem from "../../components/shared/productItem";
export default function CategoryDetails({ products }) {
  return (
    <>
      <div className="p-5 flex flex-row flex-wrap w-full ">
        {products?.length > 0 ? (
          products?.map((item, index) => {
            return <ProductItem item={item} key={index} />;
          })
        ) : (
          <div> no Products </div>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const data = fetch(`http://localhost:3000/products?categoryType=${query.id}`)
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
    props: {
      products: await data.then((res) => {
        return res;
      }), // will be passed to the page component as props
    },
  };
}
