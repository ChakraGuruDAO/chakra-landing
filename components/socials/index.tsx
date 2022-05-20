import {
  ComponentWithAs,
  HStack,
  IconProps,
  Link,
  StackProps,
} from "@chakra-ui/react";
import { telegramUrl, discordUrl, twitterUrl } from "config/links";
import {
  DiscordIcon,
  GithubIcon,
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
} from "../icons";

export const Socials: React.FC<StackProps> = ({ ...props }) => {
  return (
    <HStack gap="10px" {...props}>
      <Link href={telegramUrl} target="_blank">
        <TelegramIcon color="brand.100" boxSize="24.75px" />
      </Link>
      <Link href={discordUrl} target="_blank">
        <DiscordIcon color="brand.100" boxSize="28px" />
      </Link>
      <Link href={twitterUrl} target="_blank">
        <TwitterIcon color="brand.100" h="21.75px" w="24.75px" />
      </Link>
    </HStack>
  );
};
