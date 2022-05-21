export interface FaviconProps {}

export const Favicon: React.FC<FaviconProps> = () => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5a86f0"
      />
      <meta name="apple-mobile-web-app-title" content="Snippit" />
      <meta name="application-name" content="Chakra Guru DAO" />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#5A86F0" />
    </>
  );
};
