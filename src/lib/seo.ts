export const SEO_BASE_URL = "https://www.seiren-inc.co.jp";
export const SEO_SITE_NAME = "株式会社清蓮";

export const isProductionEnvironment = (): boolean => {
  const vercelEnv = process.env.VERCEL_ENV;
  const nodeEnv = process.env.NODE_ENV;

  if (vercelEnv) {
    return vercelEnv === "production";
  }

  return nodeEnv === "production";
};
