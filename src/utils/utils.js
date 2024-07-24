export const getComponentConstantsForLanguage = (
  UI_LANGUAGE_CONSTANTS,
  COMPONENT,
  language
) =>
  UI_LANGUAGE_CONSTANTS.find((ITEM) => {
    if (ITEM.LANGUAGE === language) {
      return true;
    }
    return false;
  })[COMPONENT];
