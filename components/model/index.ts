import dynamic from "next/dynamic";

export const Model = dynamic(() => import("./ModelRaw"), { ssr: false });
