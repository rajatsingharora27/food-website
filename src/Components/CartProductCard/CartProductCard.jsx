import { Button, Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  increaeItemFromCartPage,
  removeItemFromCart,
  removeItemFromCartPage,
} from "../../Redux/Slices/cartSlice";
import { FaRupeeSign } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

const TABLE_HEAD = ["Product", "Name", "Quantity", "Price", "Remove "];

const CartProductCard = () => {
  const cartPageItems = useSelector((state) => state.cart.cartPageItems);

  const dispatch = useDispatch();

  const increseQuantity = (index, value) => {
    dispatch(increaeItemFromCartPage({ index, value }));
  };

  const dispatchActionToDecrease = (index, value) => {
    dispatch(removeItemFromCartPage({ index, value }));
  };
  const deleteItemFormPage = (index) => {
    dispatch(removeItemFromCart(index));
  };

  return (
    <>
      <p class="text-xl font-medium ">Check You'r Products</p>

      <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        {cartPageItems.map(
          ({ id, img, productName, price, quantity }, index) => {
            return (
              <div
                key={id}
                className="flex justify-evenly items-center rounded-lg bg-white sm:flex-row"
              >
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={img}
                  alt=""
                />
                <div className="flex px-4 w-full py-4 justify-evenly items-center">
                  <span className="font-semibold w-6">{productName}</span>
                  <>
                    <div className="flex gap-x-3">
                      <Button
                        onClick={() =>
                          dispatchActionToDecrease(index, quantity)
                        }
                        className="border-2 border-solid border-gray-200 shadow-lg rounded-md"
                      >
                        -
                      </Button>
                      <h3 className="text-center text-lg font-semibold">
                        {quantity}
                      </h3>
                      <Button
                        onClick={() => increseQuantity(index, quantity)}
                        className="border-2 border-solid border-gray-200 shadow-lg rounded-md"
                      >
                        +
                      </Button>
                    </div>
                  </>
                  <p className="text-lg font-bold flex justify-center items-center gap-x-2">
                    <FaRupeeSign />
                    <span>{price}</span>
                  </p>
                  <Typography
                    color="blue-gray"
                    className="text-center text-lg font-normal"
                  >
                    <Button onClick={() => deleteItemFormPage(id)}>
                      <AiTwotoneDelete />
                    </Button>
                  </Typography>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default CartProductCard;
