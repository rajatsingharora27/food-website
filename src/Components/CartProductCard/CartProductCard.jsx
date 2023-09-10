import React from "react";

const CartProductCard = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        src="https://tuileriespatisserie.in/cdn/shop/files/BerryCharlotte_small.jpg?v=1691324580"
        alt=""
        className="w-16 h-16 object-cover"
      />
      <div>
        {/* <p className="text-gray-600">{product.name}</p>
      <p className="text-xl font-semibold">${product.price.toFixed(2)}</p> */}
        <p className="text-gray-600">Some Cake</p>
        <p className="text-xl font-semibold">$1000</p>
        <div className="mt-2">
          <label className="text-gray-600">Quantity:</label>
          <div className="flex items-center">
            <button
              className="bg-gray-200 px-2 py-1 rounded-l"
              // onClick={() => updateQuantity(product.id, product.quantity - 1)}
              // disabled={product.quantity === 1}
            >
              -
            </button>
            <span className="px-4">2</span>
            <button
              className="bg-gray-200 px-2 py-1 rounded-r"
              // onClick={() => updateQuantity(product.id, product.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
