"use client";

import Image from "next/image";
// hooks
import { useEffect } from "react";
// asset
import productImg from "@/assets/images/watch-1.png";
// libs
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { decrementQuantity, incrementQuantity } from "@/lib/features/cartSlice";
// mui
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import IconButton from "@mui/material/IconButton";

// set style for modal
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  py: 2,
  px: 3,
};

type CartModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const CartModal = ({ open, setOpen }: CartModalProps) => {
  // hooks
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart.carts);
  const total = useAppSelector((state: RootState) => state.cart.total);

  useEffect(() => {
    if (cart.length === 0) {
      setOpen(false);
    }
  }, [cart]);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <section>
          <h1 className="font-medium text-[#3e3f42] text-xl">
            Your Shopping Cart
          </h1>
        </section>
        <div className="h-[720px] overflowY-scroll">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex gap-3 mt-5 bg-[#f3f2f0] py-2 px-3"
            >
              <Image
                src={productImg}
                alt="Product Image"
                className="w-[60px]"
              />
              <section className="flex-1 flex flex-col justify-center">
                <h1 className="font-medium text-[#3e3f42]">{product.title}</h1>
                <p className="text-sm text-[#7f7f80] w-[200px] truncate">
                  {product.description}
                </p>
              </section>
              <section className="flex flex-col justify-center">
                <div className="flex gap-5">
                  <h1
                    className="text-2xl font-medium text-[#3e3f42]"
                    style={{ alignSelf: "center" }}
                  >
                    {product.quantity}
                  </h1>
                  <section className="flex flex-col">
                    <IconButton
                      aria-label="add an cart"
                      onClick={() => dispatch(incrementQuantity(product.id))}
                    >
                      <AddCircleOutlineOutlinedIcon sx={{ fontSize: "2rem" }} />
                    </IconButton>
                    <IconButton
                      aria-label="add an cart"
                      onClick={() => dispatch(decrementQuantity(product.id))}
                    >
                      <RemoveCircleOutlineOutlinedIcon
                        sx={{ fontSize: "2rem" }}
                      />
                    </IconButton>
                  </section>
                </div>
              </section>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-3">
          <section className="flex gap-2">
            <h1 className="font-medium text-[#3e3f42] text-lg">Total:</h1>
            <p style={{ alignSelf: "center" }}>${total}</p>
          </section>
        </div>
      </Box>
    </Modal>
  );
};

export default CartModal;
