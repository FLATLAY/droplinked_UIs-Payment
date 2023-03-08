import { chakra } from "@chakra-ui/react";

export const PageWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    display: "flex",
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
    pt: "24px",
    gap: "16px",
  },
});

export const ComponentWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    maxW: "1000px",
    bg: "#1c1c1c",
    p: "50px 60px",
    borderRadius: "8px",
  },
});

export const ComponentTitle = chakra("p", {
  baseStyle: {
    fontSize: "20px",
    fontWeight: "500",
    color: "#fff",
  },
});

export const Text16px = chakra("p", {
  baseStyle: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#fff",
  },
});

export const Text16px400 = chakra("p", {
  baseStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#fff",
  },
});

export const Text14px400 = chakra("p", {
  baseStyle: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#fff",
  },
});

export const CollectionContainer = chakra("div", {
  baseStyle: {
    d: "flex",
    w: "100%",
    borderRadius: "8px",
    bg: "subLayer",
    p: "18px 18px",
    flexWrap: "wrap",
    pb: "100px",
  },
});

export const CollectionItem = chakra("div", {
  baseStyle: {
    cursor: "pointer",
    p: "8px 16px",
    mr: "20px",
    maxH: "auto",
    fontSize: "20px",
    borderRadius: "28px",
    mb: "16px",
  },
});

export const SelectComponent = chakra("select", {
  baseStyle: {
    w: "100%",
    d: "flex",
    backgroundColor: "subLayer",
    borderRadius: "8px",
    color: "darkGray",
    p: "18px 18px",
    fontSize: "20px",
    fontWeight: "500",
    outline: "none",
    _focus: {
      border: "none",
      outline: "none",
    },
  },
});

export const OptionComponent = chakra("option", {
  baseStyle: {
    w: "100%",
    bg: "subLayer",
    color: "darkGray",
    p: "18px 18px",
  },
});

export const InputComponent = chakra("input", {
  baseStyle: {
    w: "100%",
    d: "flex",
    color: "darkGray",
    bg: "subLayer",
    p: "18px 18px",
    fontSize: "20px",
    fontWeight: "500",
    border: "none",
    outline: "none",
    borderRadius: "8px",
    _placeholder: {
      color: "darkGray",
    },
  },
});

export const GrayLine = chakra("div", {
  baseStyle: {
    w: "1px",
    border: "1px solid",
    h: "100%",
    minH: "20px",
    borderColor: "gray",
    borderRadius: "8px",
    bg: "line",
  },
});



export const OptionFormWrapper = chakra("div", {
  baseStyle: {
   w:'100%',
   p:'24px 36px' ,
   bg:'subLayer',
   mb:'10px',
   borderRadius:'8px'
  },
});

export const ValueInput = chakra("input", {
  baseStyle: {
  fontSize:'20px'  ,
  fontWeight:'500',
  color:'darkGray' ,
  p:'15px 24px' ,
  w:'100%',
  backgroundColor: "mainLayer",
  borderRadius: "8px",
  _placeholder:{
    color:'darkGray' ,
  },
  _focus:{
    outline:'none'
  }
  },
});


export const PlusIcon = chakra("img", {
  baseStyle: {
  w:'24px' ,
  h:'24px' ,
  mx:'18px' ,
  cursor:'pointer'
  }
});


export const VariantComponentWrapper = chakra("div", {
  baseStyle: {
    d: "flex",
    w:'100%',
    p:'16px 4px',
    alignItems:'center',
    borderBottom:'3px solid',
    borderColor:'line' ,
    justifyContent:'space-between'
  },
});

export const DetailWrapper = chakra("div", {
  baseStyle: {
    d: "flex",
    w:'75%',
    justifyContent:'space-between'
  },
});

export const Line = chakra("div", {
  baseStyle: {
    w:'3px' ,
    bg:'line' ,
    border:'1px solid' ,
    borderColor:'line'
  },
});


export const SkuFormWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    p: "36px 48px",
    bg: "subLayer",
    borderRadius: "8px",
  },
});

export const InputWrapper = chakra("div", {
  baseStyle: {
    d: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});




export const FieldInput = chakra("input", {
  baseStyle: {
    w: "70%",
    bg: "mainLayer",
    p: "15px 24px",
    fontSize: "20px",
    fontWeight: "500",
    borderRadius: "8px",
    color:'darkGray' ,
    _placeholder: {
      color: "darkGray",
    },
    _focus: {
      outline: "none",
    },
  },
});


export const SmallInput = chakra("input", {
  baseStyle: {
    w: "15%",
    fontSize: "20px",
    fontWeight: "500",
    color:'darkGray' ,
    bg:'mainLayer' ,
    border:'none',
    py:'7px' ,
    outline:'none',
    _placeholder: {
      color: "darkGray",
    },
    _focus: {
      outline: "none",
    },
  },
});








