"use client";

import { useContext } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ProductContext } from "../context/productContext";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function IconButtonWithBadge({ onClick }) {
  const { cart } = useContext(ProductContext);

  return (
    <IconButton onClick={onClick}>
      <ShoppingCartIcon fontSize="small" />
      <CartBadge
        badgeContent={cart.length}
        color="primary"
        overlap="circular"
        invisible={cart.length === 0}
      />
    </IconButton>
  );
}
