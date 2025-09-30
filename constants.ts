import { Comment } from './types';

// Base path for images - this will be handled by Vite's base configuration
export const COVER_IMAGE_URL = './images/cover.png';

// For split-view pages (two images per page)
export const CONTENT_PAGES_IMAGES = [
  // Page 2
  { img1: './images/page2a.png', img2: './images/page2b.png' },
  // Page 3
  { img1: './images/page3a.png', img2: './images/page3b.png' },
  // Page 4
  { img1: './images/page4a.png', img2: './images/page4b.png' },
  // Page 5
  { img1: './images/page4a.png', img2: './images/page4b.png' }, // Using page4 images as placeholders
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
  }
];