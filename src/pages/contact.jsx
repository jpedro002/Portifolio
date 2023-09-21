import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "contact");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="contact-container">
            <div className="title contact-title">
              Vamos entrar em contato: maneiras de se conectar comigo
            </div>
            {/* 
							/////
							
							
							
							*/}

            <div className="subtitle contact-subtitle">
              Obrigado pelo seu interesse em entrar em contato comigo. Agradeço
              seus comentários, perguntas e sugestões. Se você tiver uma
              pergunta específica ou comentário por e-mail, sinta-se à vontade
              para me enviar um e-mail diretamente para &nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a> . Faço um esforço para
              responder a todas as mensagens dentro de 24 horas, embora possa
              demorar mais durante períodos de maior movimento.
              Alternativamente, você pode usar o formulário de contato em meu
              site para entrar em contato. Basta preencher os campos
              obrigatórios e entrarei em contato com você o mais breve possível.
              Por fim, se preferir se conectar nas redes sociais, você pode me
              encontrar no {" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a> . Eu posto atualizações regulares e interajo com meus
              seguidores lá, então não hesite em entrar em contato. Obrigado
              novamente pelo seu interesse e estou ansioso para ouvir de você!
            </div>
          </div>

          <div className="socials-container">
            <div className="contact-socials">
              <Socials />
            </div>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
