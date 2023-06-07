import React, { createContext, useState, ReactNode } from "react";

export interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const initialLanguageContext: LanguageContextProps = {
  language: "pt",
  setLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextProps>(
  initialLanguageContext
);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState("pt");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
