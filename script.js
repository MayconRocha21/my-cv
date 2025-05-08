const puppeteer = require('puppeteer');

const path = require('path'); // Importe a biblioteca 'path'

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();



  // Defina o conteúdo HTML que você deseja converter em PDF
  const htmlContent = `<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Currículo - Maycon Rocha</title>
    <link rel="stylesheet" media="screen" href="style.css" />
    <script
      src="https://kit.fontawesome.com/086db1c966.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="container">
      <div class="information-column">
       
        <h1 class="title-name">Maycon Rocha</h1>
        <h2 class="areaAtual">QA Jr</h2>
        <hr/>
        <div class="contact-description">
          <h3>Contato</h3>
          <ul>
            <li>
              <i class="fa-brands fa-github"></i>
              <a href="https://github.com/MayconRocha21" target="_blank"
                >Github</a
              >
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:mgr8272@gmail.com" target="_blank">mgr8272@gmail.com</a>
            </li>
            <li>
              <i class="fa-brands fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/maycon-rocha-7b8759164/"
                target="_blank"
                >LinkedIn</a
              >
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>
              <a
                >(62) 98227-6751</a
              >
            </li>
            <li><i class="fa-solid fa-globe"></i> <a >Anápolis-GO</a></li>
          </ul>
        </div>
        <div class="education-description">
          <h3>Formação</h3>
          <ul>
            <li>
              <p>2015-2017</p>
              <h4>Superior Tecnólogo em Logística</h4>
              <h5>Faculdade Anhanguera de Anápolis</h5>
            </li>
            
            <li>
              <h4 class="certifi">Certificados</h4>
              <br>
               <h5>Alura - Formação Aprenda a programar em Python com Orientação a Objetos</h5>
              <br>
              <h5>Alura - Análise de dados com Python: utilizando o ChatGPT como assistente</h5>
              <br>
              <h5>Alura - Quality Assurance: plano de testes e gestão de bugs</h5>
              <br>
              <h5>Udemy - Python Fundamentos</h5>
              <br>
              <h5>Udemy - Banco de Dados SQL do Zero ao Avançado + Projetos Reais</h5>
              <br>
              <h5>Udemy - Javascript para QAs</h5>
              <br>
              <h5>Rocketseat - NLW Connect - React</h5>
              <br>
              <h5>Alura - JavaScript​: consumindo e tratando dados de uma API</h5>
              <br>
              <h5>Alura - Curso de Microsoft SQL 2022, conhecendo SQL</h5>
              <br>
              <h5>ADA -  Git e Github </h5>
              <br>
              <h5>Rocketseat - Fundamentos da programação web, HTML, CSS, Javascript, Git e Github</h5>
              <br>
              <h5>Udemy - JavaScript do Básico ao Avançado</h5>
              <br>
              <h5>Imersão Dev com Google Gemini | Alura</h5>
              <br>
              <h5>StepOne - HTML, CSS e JavaScript</h5>
            </li>
          </ul>
        </div>
        <div class="habili-description">
          <h3 class="habili-title">Habilidades</h3>
          <ul>
            <li>
              <i class="fa-brands fa-python"></i>
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-solid fa-database"></i>
              <!-- <i class="fa-brands fa-node-js"></i>
              <i class="fa-brands fa-figma"></i> -->
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-git"></i>

            </li>
          </ul>
        </div>
        <div class="language-description">
          <h3>Línguas</h3>
          <ul>
            <li>
              <p>Português</p>
              <div class="percent">
                <div></div>
              </div>
            </li>
            <li>
              <p>Inglês</p>
              <div class="percent english">
                <div></div>
              </div>
            </li>
            
          </ul>
        </div>
        </div>

        <div class="experiences-column">
          <section>
          <h2>Objetivo</h2>
          <div>
            <p>
              Atuar como QA Jr, Front-end Developer ou Analista de Dados, aplicando minhas habilidades técnicas para contribuir com a qualidade dos projetos e crescer na área de tecnologia.
            </p>
          </div>
          </section>

          <section>

            <h2>Experiências</h2>
            <div class="experience">
              
              <div>
                <h3>NTT DATA</h3>
                <div  class="experience-date">
                  <p>10/2024 - Atual</p>
                </div>
                <h4>Analista de Testes Funcionais</h4>
                <br>
                <p class="main-activities">Principais atividades desenvolvidas:</p>
                  <ul>
                    <li>Execução de testes funcionais manuais</li>
                    <li>Criação de massa de dados para testes</li>
                    <li>Participação em squads ágeis com metodologias Scrum e Kanban</li>
                    <li>Consultas em banco de dados Oracle SQL</li>
                    <li>Registro de evidências e abertura de defeitos</li>
                    <li>Testes e validações de API com Postman</li>
                  </ul>
              </div>
            </div>
          </section>
         
        <section class="projects">
          <h2>Principais Projetos:</h2>
          <div>
           <h3>Dev Links</h3>
          <p>Site para centralizar links importantes. Desenvolvido com HTML, CSS e JavaScript. <br>
            <a href="https://dev-links-pearl.vercel.app/" target="_blank">Visualizar </a> | <a href="https://github.com/MayconRocha21/Dev_Links" target="_blank">Código fonte</a>.</p>
            <br>
          <div>

            <h3>Calculo Combustível</h3>
            <p>App para comparar custo-benefício de combustíveis. Feito com HTML, CSS e JS. <br>
              <a href="https://gasolina-ou-alcool.vercel.app/"target="_blank"
              > Visualizar </a> | <a href="https://github.com/MayconRocha21/calculo-combustivel" target="_blank"
              > código fonte </a>.</p>
              <br>

              <h3>Quiz sobre JavaScript</h3>
              <p>Aplicação interativa criada com HTML, CSS e JavaScript no NLW Expert. <br>
                <a href="https://quiz-java-script-xi.vercel.app/"target="_blank"
              > Visualizar </a> | <a href="https://github.com/MayconRocha21/Quiz-JavaScript" target="_blank"> código fonte </a>.</p>
                <br>
                <br>
                 
                <a href="https://github.com/MayconRocha21" target="_blank">  
                  Clique aqui para ver mais projetos</a>

                  <br>

        </section>

        <button class="btn">
          <a href="Cv_MayconRocha.pdf" download="meu_documento">Baixar PDF</a> 
        </button>
        
        
        <br>
        <br>
        
        <footer>Última atualização: 04/05/2025 </footer>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
  
</html>

  `; // Substitua com seu HTML
 // Carregue o conteúdo HTML
 await page.setContent(htmlContent);

 // Aguarde até que o elemento do rodapé seja carregado (ou qualquer outro elemento relevante)
 await page.waitForSelector('footer');

 // Adicione o caminho absoluto para o arquivo CSS
 const cssPath = path.resolve(__dirname, 'style.css');

 // Aplique os estilos CSS diretamente na página
 await page.addStyleTag({ path: cssPath });

 // Configurar opções de impressão
 const pdfOptions = {
   path: 'meu_documento.pdf',
   format: 'A4',
   color:'black',
   margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
 };

 // Gere o PDF
 await page.pdf(pdfOptions);

 console.log('PDF gerado com sucesso');
 await browser.close();
})();