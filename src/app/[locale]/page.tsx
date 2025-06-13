import { Dashboard } from "@/components/dashboard/dashboard";
import { getTranslations } from "@/lib/getTranslations";
export default async function Page({ params }: any) {
  const { locale } = await params;
  const translations = await getTranslations(locale, "dashboard");
  return <Dashboard t={translations} />;
}
