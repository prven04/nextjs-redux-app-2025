import { Dashboard } from "@/components/dashboard/dashboard";
import { getTranslations } from "@/lib/getTranslations";
import { PageProps } from "@/types/common";

export default async function Page({ params }: any) {
  const { locale } = params;
  const translations = await getTranslations(locale, "dashboard");

  return <Dashboard t={translations} />;
}
