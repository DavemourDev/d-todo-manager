import { IDictionary } from "./IDictionary";
import { CATALAN } from "./languages/CatalanDictionary";
import { ENGLISH } from "./languages/EnglishDictionary";
import { SPANISH } from "./languages/SpanishDictionary";

export type Language = 'es' | 'ca' | 'en'; 

export const DICTIONARY_MAPPING = (language: Language): IDictionary => {
  switch (language) {
    case 'es':
      return SPANISH;
    case 'ca':
      return CATALAN;
    case 'en':
      return ENGLISH;
    default:
      return ENGLISH;
  }
  
}