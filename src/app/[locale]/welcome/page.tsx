import { Welcome } from "@/components/welcome/welcome";
import { getTranslations } from "@/lib/getTranslations";

type PageProps = {
  params: {
    locale: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const translations = await getTranslations(locale, "welcome");
  console.log("translations", locale);
  return <Welcome t={translations} />;
}
