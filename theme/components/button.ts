import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "6px",
    bg: "pink.100",
    p: "10px 24px",
    fontSize: "14px",
    color: "white",
    fontWeight: 500,
    transition: "all",
    transitionDuration: "0.3s",
    _hover: {
      bg: "pink.200",
    },
  },
  variants: {
    white: {
      color: "pink.100",
      bg: "white",
      transition: "all",
      transitionDuration: "0.3s",
      _hover: {
        bg: "whiteAlpha.800",
      },
    },
    "pre-sale": {
      color: "white",
      bg: "brand.100",
      width: "100%",
      transition: "all",
      transitionDuration: "0.3s",
      _hover: {
        bg: "brand.200",
      },
    },
  },
};

export default Button;
