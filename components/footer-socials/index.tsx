import {
  ComponentWithAs,
  HStack,
  IconProps,
  Link,
  StackProps,
} from "@chakra-ui/react";
import {
  GITHUB_LINK,
  MEDIUM_LINK,
  TELEGRAM_LINK,
  DISCORD_LINK,
  TWITTER_LINK,
} from "config/links";
import {
  DiscordIcon,
  GithubIcon,
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
} from "../icons";

export const FooterSocials: React.FC<StackProps> = ({ ...props }) => {
  return (
    <HStack gap="10px" {...props}>
      <Link href={GITHUB_LINK} target="_blank">
        <GithubIcon color="brand.100" boxSize="25px" />
      </Link>
      <Link href={MEDIUM_LINK} target="_blank">
        <MediumIcon color="brand.100" boxSize="25px" />
      </Link>
      <Link href={TELEGRAM_LINK} target="_blank">
        <TelegramIcon color="brand.100" boxSize="24.75px" />
      </Link>
      <Link href={DISCORD_LINK} target="_blank">
        <DiscordIcon color="brand.100" boxSize="28px" />
      </Link>
      <Link href={TWITTER_LINK} target="_blank">
        <TwitterIcon color="brand.100" h="21.75px" w="24.75px" />
      </Link>
    </HStack>
  );
};
