declare module "*.png" {
  const height: number;
  const width: number;
  const uri: string;

  export default {
    height,
    width,
    uri,
  };
}

declare module "dom-to-image";
