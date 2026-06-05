import type { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = (): string => {
  const baseIdentifier = "com.sormiston.StickerSmash";
  if (IS_DEV) return `${baseIdentifier}.dev`;
  if (IS_PREVIEW) return `${baseIdentifier}.preview`;

  return baseIdentifier;
};

const getAppName = (): string => {
  if (IS_DEV) return "StickerSmash (Dev)";
  if (IS_PREVIEW) return "StickerSmash (Preview)";

  return "StickerSmash: Emoji Stickers";
};

const getAppSlug = (): string => {
  const baseSlug = "sticker-smash";
  if (IS_DEV) return baseSlug + "-dev";
  if (IS_PREVIEW) return baseSlug + "-preview";

  return baseSlug;
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: getAppSlug(),
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
  },
  web: {
    name: getAppName(),
  },
});
