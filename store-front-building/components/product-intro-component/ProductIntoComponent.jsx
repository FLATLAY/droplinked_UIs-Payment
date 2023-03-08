import { Box } from "@chakra-ui/react";

import { ComponentWrapper, ComponentTitle } from "../../Add-product-style"

import FormInput from "../../../../../components/shared/FormInput/FormInput";
import InputImagesGroup from "../../../../../components/shared/InputImageGroupe/Input-images-component";

const ProductIntoComponent = ({ productIntro, dispatchIntro }) => {
  const changeTitle = (e) =>
    dispatchIntro({ type: "updateTitle", payload: e.target.value });
  const changeDesctiption = (e) =>
    dispatchIntro({ type: "updateDescription", payload: e.target.value });
  const changeMedia = (images) =>
  dispatchIntro({ type: "updateMedia", payload: images });

  return (
    <ComponentWrapper>
      <ComponentTitle>Introduction</ComponentTitle>
      <Box mb="36px" />
      <FormInput
        label="Title"
        placeholder="Default"
        value={productIntro.title}
        changeValue={changeTitle}
      />
      <Box mb="40px" />
      <FormInput
        label="Description"
        placeholder="Default"
        type="textarea"
        value={productIntro.description}
        changeValue={changeDesctiption}
      />
      <Box mb="36px" />
      <InputImagesGroup setState={changeMedia} state={productIntro.media} />
    </ComponentWrapper>
  );
};
export default ProductIntoComponent;
