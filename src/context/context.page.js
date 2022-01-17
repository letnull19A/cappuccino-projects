import { createContext } from "react";

export const ContextPage = createContext({
      currentPageTitle: 'none-titled-page',
      changeTitle: function (title) {
            document.title = title;
      }
});