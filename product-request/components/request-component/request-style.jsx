import { chakra } from "@chakra-ui/react";

export const TextComponent = chakra("p", {
  baseStyle: {
    fontSize: "12px",
    fontWeight: "400",
    color: "white",
  },
});

export const RequestButton = chakra("button", {
  baseStyle: {
    w: "140px",
    p: "8px 0px",
    borderRadius: "36px",
    fontSize: "14px",
    fontWeight: "500",
  },
});

export const ShopImage = chakra("img", {
  baseStyle: {
    w: "36px",
    h: "36px",
    borderRadius: "50%",
  },
});

export const RequestComponentWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    p: "36px 60px",
    borderBottom: "1px solid",
    borderColor: "line",
  },
});



export const ProductImage = chakra("img", {
  baseStyle: {
    w:"104px" ,
    h:"104px" ,
    borderRadius:"8px" ,
    mr:"36px" ,
  },
});


export const LineComponent = chakra("div", {
  baseStyle: {
    w:"1px"  ,
    h:"100%"   ,    
    borderRight:"2px solid" ,
    borderColor:"line" ,
    mx:"14px" ,
  },
});

