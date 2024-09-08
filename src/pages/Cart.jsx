import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

function Cart({ Api, SetApi }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapiserver.reactbd.com/products"
      );
      const data = await response.json();
      setTimeout(() => {
        SetApi(data); // Set the fetched data into state
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="m-3 grid lg:grid-cols-3 md:grid-cols-2 w-[90vw] mx-auto gap-5">
        {loading ? (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[80px] h-[78px] flex justify-center items-center">
              <PropagateLoader color="#1f7bd1" />
            </div>
          </div>
        ) : (
          Api.map((product) => (
            <div
              key={product.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5"
            >
              <a href="#">
                <img
                  className="rounded-t-lg lg:w-[30vw] lg:h-[30vw] md:w-[55vw] md:h-[35vw]"
                  src={product.image}
                  alt={product.title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.description}
                </p>
                <div className="flex justify-between">
                  <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                    Price: ${product.price}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Cart;
