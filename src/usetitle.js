import { useEffect } from "react";
export function useHomeTitle(title) {
  const defaultTitle = "Trevor Bercher's Wesbite"
  useEffect(() => {
    document.title = title ? `${defaultTitle} | ${title}` : defaultTitle;
  }, [title]);
}

export function useItisTitle(title) {
  const defaultTitle = "Trevor Bercher's Tenacious Bear | ITIS3135"
  useEffect(() => {
    document.title = title ? `${defaultTitle} | ${title}` : defaultTitle;
  }, [title]);
}