export interface DictionaryData {
  word: string;
  phonetics: {
    text: string;
    audio: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example: string[];
    }[];
    synonyms: string[];
  }[];
  sourceUrls: string[];
}