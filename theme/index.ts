import { extendTheme } from "@chakra-ui/react";

import components from "./components";

import styles from "./styles";
import config from "./config";
import fonts from "./fonts";
import colors from "./colors";

export default extendTheme({
  // config,
  fonts,
  styles,
  colors,
  components,
});
