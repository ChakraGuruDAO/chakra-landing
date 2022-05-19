import { HStack, Link, StackProps } from "@chakra-ui/react";
import {
  DiscordIcon,
  GithubIcon,
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
} from "../icons";

interface SocialsProps extends StackProps {
  telegram?: string;
  twitter?: string;
  discord?: string;
  github?: string;
  medium?: string;
}

export const Socials: React.FC<SocialsProps> = ({
  telegram = "https://t.me/chakra_guru",
  twitter = "https://twitter.com/ChakraGuruDAO",
  discord = "https://discord.gg/FtvwdzHhkK",
  github = "https://github.com/ChakraGuruDAO",
  medium = "https://chakraguru.medium.com/",
  ...props
}) => {
  return (
    <HStack gap="10px" {...props}>
      <Link href={github}>
        <GithubIcon color="brand.100" boxSize="25px" />
      </Link>
      <Link href={medium}>
        <MediumIcon color="brand.100" boxSize="25px" />
      </Link>
      <Link href={telegram}>
        <TelegramIcon color="brand.100" boxSize="24.75px" />
      </Link>
      <Link href={discord}>
        <DiscordIcon color="brand.100" boxSize="28px" />
      </Link>
      <Link href={twitter}>
        <TwitterIcon color="brand.100" h="21.75px" w="24.75px" />
      </Link>
    </HStack>
  );
};
