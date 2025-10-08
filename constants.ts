import { Comment } from './types';

// Base path for images - this will be handled by Vite's base configuration
export const COVER_IMAGE_URL = './images/cover.png';

// Video URL
export const VIDEO_URL = './images/Video1.mp4';

// For split-view pages (two images per page)
export const CONTENT_PAGES_IMAGES = [
  // Page 2
  { img1: './images/page2a.png', img2: './images/page2b.png' },
  // Page 3
  { img1: './images/page3a.png', img2: './images/page3b.png' },
  // Page 4
  { img1: './images/page4a.png', img2: './images/page4b.png' },
  // Page 5
  { img1: './images/page5a.png', img2: './images/page5b.png' }, // Updated with both page5 images
];

// For single full-page images
export const SINGLE_PAGE_IMAGES = [
  './images/page2a.png', // This is the image you currently have
  // Add more single page images as needed
];

export const COMMENTS: Comment[] = [
  { 
    author: "Carlos Cruz", 
    text: `Public Sub Main()
    ' Mostra uma mensagem personalizada ao utilizador no PHC CS
    PHCApp.MsgBox("Boa sorte para os desafios futuros. Obrigado por tudo, e pelos cupões Prozis também :)")
End Sub`
  },
  { author: "Ana Vieira", text: "Diogo, foi um prazer trabalhar contigo! Que esta nova fase seja mais anabólica que um batido da Prozis 💪. Muito sucesso! Beijinhos 💛" },
  { author: "Ruben Ribeiro", text: "Boa sorte nesta nova fase! Que os bugs sejam fáceis de corrigir, os pesos difíceis de levantar e que ganhes sempre mais força no ginásio do que dores de cabeça no código." },
  { 
    author: "Beatriz", 
    text: `Diogo,
Quem diria…
Quem diria que ias ser uma das pessoas mais importantes do meu capítulo na NewCoffee? Que aquele "bicho" reservado se revelava afinal um coração mole e enorme, com o abraço forte na hora certa, sempre atento e cuidadoso comigo.

Mesmo com as nossas costas de tamanhos bem diferentes (e sim, com uma bunda muito melhor do que a minha, admito com alguma inveja!), foste sempre aquele sorriso contagiante no meio da rotina com uma pitada de timidez.

Obrigada por tudo o que foste e és nesta caminhada. Que a vida te sorria muito neste novo capítulo.

E lembra-te: a miúda mais lamechas da equipa vai estar sempre aqui para ti e para uma sessão de PT, claro. O voucher não tem data de validade 😎

Com carinho,` 
  },
  { 
  author: "Flávio", 
  text: `Mais uma nova etapa e conquista, e pelo que te conheço mais do que merecida! A mudança faz parte do crescimento, e sei que estás totalmente preparado para tudo que aí vem. 
É sempre bom ver uma máquina como tu a ser reconhecida e recompensada como deve ser, com as melhores condições possíveis! 
Desejo te o maior sucesso nesta nova fase, que continues a crescer profissionalmente e fisicamente também, ainda mais! 💪😂
Um grande abraço e tudo de bom nesta nova aventura!` 
  },
  {
    author: "Bebiana Silva",
    text: `Meu querido Rocha,
Já é a segunda vez que fazes isto, espero q não venha uma terceira. Se bem q uma terceira já não seria na Newcoffee, teria de ser numa outra empresa qualquer 😁
Quero que saibas que das duas vezes que trabalhei contigo foi um privilégio enorme, não só porque és um profissional de excelência, mas porque és uma pessoa do bem.
És genuinamente boa pessoa, és íntegro, reges te com bons princípios e altruísta. És super educado, sabes estar e um bom ouvinte/ conselheiro.
Gosto muito de ti e terás sempre um lugar especial no meu coração. Desejo te um enorme sucesso não só a nível profissional (que não duvido nem um bocadinho que o vás conseguir), como a nível pessoal também. Só quero que sejas feliz em todos os campos e que tenhas sempre saúde (aquele desejo de quem está quase nos 40 🙈).
Um abraço desta menina que sempre te estimará`
  },
  {
    author: "Mónica",
    text: `Diogo, 
Desejo-te as maiores Felicidades, tanto a nível profissional como pessoal.
Que a jornada que se inicia seja repleta de oportunidades e vitórias!
Eu sei como bom profissional que és, irás Triunfar! 
Beijinhos.`
  },
  {
    author: "Fátima",
    text: `Diogo A tua presença iluminou o nosso ambiente de trabalho, trazendo alegria, obrigada pela tua amizade e pelos sorrisos que tu trouxeste ao meu dia a dia, enquanto estive na Newcoffee. 
Espero que esta tua nova trajetória seja repleta de oportunidades e conquistas .  
Muitas felicidades 😘😘`
  },
  {
    author: "Tiago Melo",
    text: `SELECT bombadão
 
FROM pessoal_fixe_newcoffee
 
WHERE
               paixão = 'gym' AND
               dedicação = 'muita' AND
               conhecimento = 'máximo' AND
               sempre_pronto_ajudar = 1 AND
               molho_preferido = 'mostarda prozis' AND
               codigo = 'DROCHA'
 
RESULTADO: Só podia ser o grande Diogo Rocha! Foi, sem margem de dúvidas, um prazer ter convivido contigo. A tua boa disposição, prontidão em ajudar, piadas partilhadas na hora do almoço / lanches são características / maneiras de estar que, aliadas à tua forma de ser, devem ser valorizadas por ti (e são valorizadas pelos outros) e espero que as mantenhas na tua vida.
 
"Daqui a vinte anos, vais arrepender-te mais das coisas que não fizeste do que das que fizeste" – Mark Twain. Ou seja, segue com confiança, com vontade de continuar a crescer e a acreditar que tomaste a decisão certa (mesmo que sintas desconfiança por parte de outras pessoas). Como se costuma dizer, "roda no ar", mas cuidado com a forma como conduzes, para não gastar tanto pneu.
 
Resta ainda dizer: boa sorte neste novo desafio. Desejo-te as maiores felicidades :)
 
Abraço,`
  },
  {
    author: "Helena Marques",
    text: `Diogo,

Mudanças são sinónimo de evolução, e espero que esta nova fase seja apenas o início de mais uma jornada cheia de conquistas e sucesso.

Foi muito bom ter tido a oportunidade de conviver contigo e partilhar tantos momentos com a nossa grupeta maravilhosa — mesmo quando reclamavas comigo por não endireitar as costas e dizias que eu precisava de fazer pilates 😬😅. 

Vou sentir falta dos teus conselhos sobre quais são as bolachas mais saudáveis e de me dizeres que os meus iogurtes estão cheios de açúcar 😅 — mas, acima de tudo, vou sentir falta da tua companhia e da boa disposição.

Boa sorte para esta nova etapa e continua a espalhar essa energia boa por onde fores. Quem sabe, um dia, ainda nos voltamos a cruzar e abrimos o tal negócio! 😜🍰

Um beijinho,`
  },
  {
    author: "Michelle Coutinho",
    text: `Olá Bonitão!

Agradeço as tuas dicas sobre uma boa alimentação é impressionante a tua sabedoria!

És um excelente profissional muito inteligente. Sempre muito disponível para ajudar e com boa energia😊

Desejo que tenhas todo o sucesso tanto na vida profissional como pessoal.

Que a vida te sorria sempre! 😊 

Beijinho Grande! 😗`
  }
];