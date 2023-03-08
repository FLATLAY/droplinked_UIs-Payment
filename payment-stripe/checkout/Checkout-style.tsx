import { chakra } from "@chakra-ui/react";

export const CheckoutPageWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    h: "auto",
    bg: "#F9F9F6",
    // pt: "100px",
    display: "flex",
    justifyContent: "center",
    // pb: "90px",
    p: { base: "20px 21px 50px 21px", lg: "100px 20px 90px 20px" },
  },
});

export const CheckoutPageContent = chakra("div", {
  baseStyle: {
    w: "100%",
    maxW: "1200px",
  },
});

export const PageTitle = chakra("p", {
  baseStyle: {
    //w: "100%",
    textAlign: "start",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: "26px ",
    color: "#27262B",
  //  pt: "32px",
    //  borderBottom: "1px solid",
    // borderColor: "#E9E9E2",
  },
});

export const ContinueShippngText = chakra("p", {
  baseStyle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#27262B",
    fontFamily: "Manrope",
    textDecoration: "underline",
    cursor: "pointer",
  },
});

export const ProductsWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    bg: "#FFFFFF",
    p:{base:'32px' ,lg:"64px 48px"},
    border: "1px solid #EFECDC",
    borderRadius: " 16px",
    mb:'32px'
  },
});

export const FlexRow = chakra("div", {
  baseStyle: {
    w: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const ProductTitle = chakra("p", {
  baseStyle: {
    fontFamily: "Manrope",
    fontWeight: "700",
    fontSize: "24px",
    color: "#262626",
    whiteSpace:'normal',
   
  },
});


export const ProductPrice = chakra("p", {
    baseStyle: {
      fontFamily: "Manrope",
      fontWeight: "400",
      fontSize: "24px",
      color: "#262626",
    },
  });


  
  
  export const DiscardButton = chakra("div", {
    baseStyle: {
      w: "auto",
      cursor: "pointer",
      p: {base:'8px 8px',md:"8px 16px"},
      borderRadius: "1px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Manrope",
      color:"#121314" ,
      bg:"transparent" ,
      borderColor:"#121314" ,
    },
  });
