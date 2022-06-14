import { NextPage } from "next";
import { Img, Text } from "@chakra-ui/react";
import { Model } from "components/model";
import Image from "next/image";

const ModelPage: NextPage = () => {
  return (
    <>
      <Model
        srcGLTF="/model.gltf"
        srcUSDZ="/model.usdz"
        srcPoster="/model.png"
        alt="Hex Witcher"
      ></Model>
    </>
  );
};

export default ModelPage;
