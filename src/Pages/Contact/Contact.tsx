import {
  ContactLinks,
  ContactStyled,
  IconsDiv,
  InputContainer,
} from "./ContactStyled";
import { gmailIcon, gitIcon, linkedinIcon } from "../../assets/index";
import { send } from "emailjs-com";
import { useState, useContext } from "react";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../contexts/LanguageContext";
import ptTranslations from "../../locales/pt.json";
import enTranslations from "../../locales/en.json";

export const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Dênis",
    message: "",
    reply_to: "",
  });

  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const { language, setLanguage } =
    useContext<LanguageContextProps>(LanguageContext);
  const translations = language === "pt" ? ptTranslations : enTranslations;

  const onSubmit = (e: any) => {
    e.preventDefault();
    send("service_yabrcct", "template_9o5kly7", toSend, "a1jkV88pLuCwTfuqm")
      .then((response) => {
        setMessage(translations.sent);
        setIsSent(true);
        const timing = setTimeout(() => {
          setIsSent(false);
          setToSend({
            from_name: "",
            to_name: "Dênis",
            message: "",
            reply_to: "",
          });
        }, 1500);
        return () => clearTimeout(timing);
      })
      .catch((err) => {
        console.log("Erro", err);
      });
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <ContactStyled id="contact">
      <ContactLinks>
        <h2>{translations.entercontact}</h2>
        <IconsDiv>
          <a href="https://www.linkedin.com/in/denisluft8/" target="_blank">
            <img src={linkedinIcon} />
          </a>
          <a href="https://github.com/denisluft8" target="_blank">
            <img src={gitIcon} />
          </a>
          <a href="https://whatsa.me/5548988047338" target="_blank">
            <img src={gmailIcon} />
          </a>
        </IconsDiv>
      </ContactLinks>
      <InputContainer>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder={translations.name}
            value={toSend.from_name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={translations.msg}
            value={toSend.message}
            onChange={handleChange}
            required
          />
          <button type="submit">{translations.send}</button>
        </form>
        {isSent && <span>{message}</span>}
      </InputContainer>
    </ContactStyled>
  );
};
