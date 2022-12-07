import {
  ContactLinks,
  ContactStyled,
  IconsDiv,
  InputContainer,
} from "./ContactStyled";
import { gmailIcon, gitIcon, linkedinIcon } from "../../assets/index";
import { send } from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Dênis",
    message: "",
    reply_to: "",
  });

  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    send("service_46h5ozb", "template_9o5kly7", toSend, "a1jkV88pLuCwTfuqm")
      .then((response) => {
        setMessage("Enviado");
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
        <h2>Entre em Contato</h2>
        <IconsDiv>
          <a href="https://www.linkedin.com/in/denisluft8/" target="_blank">
            <img src={linkedinIcon} />
          </a>
          <a href="https://github.com/denisluft8" target="_blank">
            <img src={gitIcon} />
          </a>
          <a href="mailto:denisluft8@gmail.com" target="_blank">
            <img src={gmailIcon} />
          </a>
        </IconsDiv>
      </ContactLinks>
      <InputContainer>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Nome"
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
            placeholder="Mensagem"
            value={toSend.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
          {isSent ? <span >{message}</span> : <></>}
      </InputContainer>
    </ContactStyled>
  );
};

//service_46h5ozb
