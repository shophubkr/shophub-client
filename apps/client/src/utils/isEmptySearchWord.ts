export const isEmptySearchWord = (word: string | null) => {
  if (!word) return false;
  return !word.trim();
};
