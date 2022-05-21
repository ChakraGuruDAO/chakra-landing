import React from "react";

export interface MetadataProps {
  title?: string;
  description?: string;
}

export const Metadata: React.FC<MetadataProps> = ({
  title = "AR Metaverse",
}) => {
  return (
    <>
      <title>Chakra Guru DAO - {title}</title>
      <meta
        name="description"
        content="Location based AR-Metaverse platform"
        key="desc"
      />
      <meta property="og:title" content={`Chakra Guru DAO - ${title}`} />
      <meta
        property="og:description"
        content="Location based AR-Metaverse platform"
      />
      <meta property="og:image" content="https://chakra.guru/og.svg" />
    </>
  );
};
