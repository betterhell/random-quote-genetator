import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const spaceReplacer = (author) => {
  let newAuthor = "";

  for (let i = 0; i < author.length; i++) {
    if (author[i] !== " ") {
      newAuthor += author[i];
    } else {
      newAuthor += "+";
    }
  }
  return newAuthor;
};

export const useQuoteGenerator = create(
  persist((set, get) => ({
    currentRandomQuote: {},
    isLoading: true,
    isError: null,
    quotes: [],

    getRandomQuote: () => {
      axios
        .get("https://favqs.com/api/qotd")
        .then(({ data }) => {
          set({
            currentRandomQuote: {
              author: data.quote.author,
              body: data.quote.body,
              tags: data.quote.tags,
              id: data.quote.id,
            },
          });
          set({ isLoading: false });
        })
        .catch((error) => {
          set({ isError: error.message + "Failed to fetch" });
        });
    },

    getAuthorQuotes: () => {
      const currentAuthor = get().currentRandomQuote;

      axios
        .get(
          `https://favqs.com/api/quotes/?filter=${spaceReplacer(
            currentAuthor.author
          )}&type=author`,
          {
            headers: {
              Authorization: "Token token=" + process.env.REACT_APP_API_KEY,
            },
          }
        )
        .then(({ data }) => {
          set({
            currentRandomQuote: {
              ...currentAuthor,
              quotes: data.quotes,
            },
          });
          set({ isLoading: false });
        })
        .catch((error) => {
          set({ isError: error.message + "Failed to fetch author quotes" });
        });
    },
  }))
);
