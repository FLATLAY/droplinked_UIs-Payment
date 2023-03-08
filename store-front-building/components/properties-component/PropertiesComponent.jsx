import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import {
  ComponentWrapper,
  ComponentTitle,
  Text16px400,
  Text14px400,
  GrayLine,
  OptionFormWrapper,
  SelectComponent,
  OptionComponent,
  ValueInput,
  PlusIcon,
} from "../../Add-product-style";
//import { getVariants } from "../../../../../api-service/product/productApiService";
import { useApi } from "../../../../../hooks/useApi/useApi";

import plus from "../../../../../assest/icon/plus-icon.svg";
import BasicButton from "../../../../../components/shared/BasicButton/BasicButton";

const PropertiesComponent = ({ OptionList, setOptionList }) => {
 // const { getApi } = useApi();

  const [variantsType, setVariantType] = useState(null);

  useEffect(async () => {
    // let result = await getApi(getVariants());
    // if (result) setVariantType(result.variants);
    setVariantType(
      [
        ({
          _id: "62a989ab1f2c2bbc5b1e7153",
          name: "Color",
        },
        {
          _id: "62a989e21f2c2bbc5b1e7154",
          name: "Size",
        })
      ]
    )
  }, []);

  const changeOptionType = (optionId, optionIndex) => {
    let optionName = variantsType.find((vari) => vari._id == optionId).name;
    let optionArray = Array.from(OptionList);

    optionArray = optionArray.map((opt) => {
      const optionValues =
        opt.values.length == 0 ? [{ index: 1, value: "" }] : opt.values;

      if (opt.index != optionIndex) return { ...opt };
      else
        return {
          optionId: optionId,
          optionName: optionName,
          values: optionValues,
          index: opt.index,
        };
    });

    setOptionList(optionArray);
  };

  const existVariant = (variantId) => {
    let result = false;
    OptionList.forEach((option) => {
      if (option.optionId == variantId) result = true;
    });
    return result;
  };

  const changeOptionValue = (optionIndex, valueIndex, newValue) => {
    let optionArray = Array.from(OptionList);
    let findOption = optionArray.find((option) => option.index == optionIndex);
    let optionValues = findOption.values.map((value) => {
      if (value.index == valueIndex) {
        return { index: value.index, value: newValue };
      } else {
        return { ...value };
      }
    });
    findOption = { ...findOption, values: optionValues };
    optionArray = optionArray.map((option) => {
      if (option.index == optionIndex) return { ...findOption };
      else return { ...option };
    });
    setOptionList(optionArray);
  };

  const addValueToOption = (optionIndex) => {
    let optionArray = Array.from(OptionList);

    optionArray = optionArray.map((opt) => {
      if (opt.index == optionIndex) {
        const optionValues = opt.values;
        optionValues.push({ index: opt.values.length + 1, value: "" });
        return {
          optionId: opt.optionId,
          optionName: opt.optionName,
          values: optionValues,
          index: opt.index,
        };
      } else return { ...opt };
    });
    setOptionList(optionArray);
  };

  const addNewOption = () => {
    let currentOption = Array.from(OptionList);
    currentOption.push({
      optionId: "",
      optionName: "",
      values: [],
      index: OptionList.length + 1,
    });
    setOptionList(currentOption);
  };

  return (
    <ComponentWrapper>
      <ComponentTitle>Properties</ComponentTitle>
      <Box mb="36px" />
      <Flex w="100%" alignItems="center" gap="100px" mb="48px">
        <Text16px400>Required</Text16px400>

        <Flex w="calc(100% - 150px)" justifyContent="space-between" h="100%">
          <Text14px400>Price</Text14px400>
          <GrayLine />
          <Text14px400>Quantity</Text14px400>
          <GrayLine />
          <Text14px400>External ID</Text14px400>
          <GrayLine />
          <Text14px400>Delivery boxing information</Text14px400>
        </Flex>
      </Flex>

      <Flex w="100%" alignItems="center" gap="100px">
        <Text16px400>Optional</Text16px400>

        <Box w="calc(100% - 150px)">
          {OptionList.map((option) => {
            return (
              <OptionFormWrapper key={option.index}>
                <Flex justifyContent="space-between" alignItems="center">
                  <ComponentTitle>Property</ComponentTitle>
                  <Box mr="10%"></Box>
                  <SelectComponent
                    onChange={(e) =>
                      changeOptionType(e.target.value, option.index)
                    }
                  >
                    <OptionComponent selected disabled hidden>
                      Property
                    </OptionComponent>
                    {variantsType.map((variant) => {
                      return (
                        <OptionComponent
                          value={variant._id}
                          disabled={existVariant(variant._id)}
                        >
                          {variant.name}
                        </OptionComponent>
                      );
                    })}
                  </SelectComponent>
                </Flex>

                {option.values.map((optionValue) => {
                  return (
                    <>
                      <Box mb="16px"></Box>
                      <Flex justifyContent="space-between" alignItems="center">
                        <Text
                          fontWeight="400"
                          fontSize="20px"
                          color="white"
                          w="100px"
                        >
                          Value {optionValue.index}
                        </Text>
                        <Box mr="10%"></Box>
                        <Flex w="100%" alignItems="center">
                          <ValueInput
                            placeholder="default"
                            value={optionValue.value}
                            onChange={(e) => {
                              changeOptionValue(
                                option.index,
                                optionValue.index,
                                e.target.value
                              );
                            }}
                          />
                          {optionValue.index == option.values.length && (
                            <PlusIcon
                              src={plus}
                              onClick={() => {
                                addValueToOption(option.index);
                              }}
                            />
                          )}
                        </Flex>
                      </Flex>
                    </>
                  );
                })}
              </OptionFormWrapper>
            );
          })}

          {OptionList.length < 2 && (
            <Box w="100%">
              <BasicButton click={addNewOption} cancelType={true}>
                Add new
              </BasicButton>
            </Box>
          )}
        </Box>
      </Flex>
    </ComponentWrapper>
  );
};

export default PropertiesComponent;
