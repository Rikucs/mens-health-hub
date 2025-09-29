import { Comment } from './types';

// Base URL handling for GitHub Pages
const BASE_URL = process.env.NODE_ENV === 'production' ? '/mens-health-hub' : '';

// Using paths that work with GitHub Pages deployment
export const COVER_IMAGE_URL = `${BASE_URL}/images/cover.png`;

// For split-view pages (two images per page)
export const CONTENT_PAGES_IMAGES = [
  // Page 2
  { img1: `${BASE_URL}/images/page2a.png`, img2: `${BASE_URL}/images/page2b.png` },
  // Page 3
  { img1: `${BASE_URL}/images/page3a.png`, img2: `${BASE_URL}/images/page3b.png` },
  // Page 4
  { img1: `${BASE_URL}/images/page4a.png`, img2: `${BASE_URL}/images/page4b.png` },
  // Page 5
  { img1: `${BASE_URL}/images/page5a.png`, img2: `${BASE_URL}/images/page5b.png` },
];

// For single full-page images
export const SINGLE_PAGE_IMAGES = [
  `${BASE_URL}/images/page2a.png`, // This is the image you currently have
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
  }
];