import Modal from "react-modal";
import { useEffect, useState } from "react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "80%",
    margin: "auto",
    shadow:
      " var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  },
};
export default function AddEditProduct({
  btnName,
  data,
  handleSubmit,
  HideModal,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState(data);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    HideModal && closeModal();
  }, [HideModal]);

  return (
    <>
      <div className="flex items-center justify-end ">
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={openModal}
        >
          {btnName}
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div
          className="fixed z-10 overflow-y-auto top-0 w-full left-0 p-5 "
          id="modal"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <label>category</label>
            <select
              className="w-full bg-gray-100 p-2 mt-2 mb-3"
              value={product?.categoryType || ""}
              onChange={(e) => {
                setProduct({ ...product, categoryType: e.target.value });
              }}
            >
              <option value="supermarket">supermarket</option>
              <option value="fashion">fashion</option>
              <option value="home_office">home&office</option>
            </select>
            <label>Name</label>
            <input
              type="text"
              className="w-full bg-gray-100 p-2 mt-2 mb-3"
              value={product.name}
              onChange={(e) => {
                setProduct({ ...product, name: e.target.value });
              }}
            />
            <label>image</label>
            <input
              type="text"
              className="w-full bg-gray-100 p-2 mt-2 mb-3"
              value={product.image}
              onChange={(e) => {
                setProduct({ ...product, image: e.target.value });
              }}
            />
            <label>description</label>
            <input
              type="text"
              className="w-full bg-gray-100 p-2 mt-2 mb-3"
              value={product.description}
              onChange={(e) => {
                setProduct({ ...product, description: e.target.value });
              }}
            />
            <label>price</label>
            <input
              type="text"
              className="w-full bg-gray-100 p-2 mt-2 mb-3"
              value={product.price}
              onChange={(e) => {
                setProduct({ ...product, price: Number(e.target.value) });
              }}
            />
          </div>
          <div className=" px-4 py-3 text-right">
            <button
              type="button"
              className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
              onClick={closeModal}
            >
              <i className="fas fa-times"></i> Cancel
            </button>
            <button
              type="button"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
              onClick={() => handleSubmit(product)}
              disabled={
                !product.categoryType ||
                !product.name ||
                !product.image ||
                !product.description ||
                !product.price
              }
            >
              <i className="fas fa-plus"></i> Create
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
