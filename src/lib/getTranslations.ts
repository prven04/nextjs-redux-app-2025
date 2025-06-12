export async function getTranslations(locale: string, namespace: string) {
  try {
    const data = await import(`../i18/${locale}/${namespace}.json`);
    return data.default;
  } catch (error) {
    console.warn(`Translation for ${locale}/${namespace} not found.`);
    return {}; // fallback to empty
  }
}
