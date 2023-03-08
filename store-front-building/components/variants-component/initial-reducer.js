
 export const initialReducer = (OptionList, defaultValue) => {
    let initialSku;
    if (defaultValue) {
      let options = defaultValue.options.map((option) => {
        return {
          variantID: option.variantID,
          variantName: option.variantName,
          value: option.value,
        };
      });
      initialSku = {
        price: defaultValue.price,
        externalID: defaultValue.externalID,
        quantity: defaultValue.quantity,
        options: options,
        dimensions: {
          length: defaultValue.dimensions.length,
          width: defaultValue.dimensions.width,
          height: defaultValue.dimensions.height,
        },
        weight: defaultValue.weight,
      };
    } else {
      let options =
        OptionList.length == 0
          ? []
          : OptionList.map((option) => {
              return {
                variantID: option.optionId,
                variantName: option.optionName,
                value: "",
              };
            });
  
      initialSku = {
        price: "",
        externalID: "",
        quantity: "",
        options: options,
        dimensions: {
          length: "",
          width: "",
          height: "",
        },
        weight: "",
      };
    }
  
    return initialSku;
  };