import { chakra } from "@chakra-ui/react";

export const ImsPageWrapper = chakra("div", {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    w: "100%",
    bg:'mainLayer',
    borderRadius:'8px',
    p:{base:'30px 20px',sm:'40px 30px' , md:'40px 60px' , lg:'40px 100px'  }
  },
});

export const HeaderTitle = chakra("p", {
  baseStyle: {
    color: "white",
    fontWeight: "600",
    fontSize: { base: "30px", md: "40px" },
  },
});

export const MerchCounter = chakra("p", {
  baseStyle: {
    color: "white",
    fontWeight: "500",
    fontSize: "14px",
    mb: "25px",
  },
});
