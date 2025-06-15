// =====================
// MÓDULO: ÉTICA
// =====================
const questoes = [
  {
    premissa: "Todos os atos justos são virtuosos.",
    exemplo: "A honestidade é um ato justo.",
    conclusao: "A honestidade é virtuosa.",
    correta: true,
    certo: "✅Correto! A honestidade promove integridade.",
    errado: "❌Incorreto. Negar isso contradiz princípios éticos."
  },
  {
    premissa: "Todos os atos que causam dano a outros são imorais.",
    exemplo: "A violência é um ato que causa dano.",
    conclusao: "A violência é imoral.",
    correta: true,
    certo: "✅Correto! A violência fere o princípio de não prejudicar.",
    errado: "❌Incorreto. Justificar a violência compromete valores éticos."
  },
  {
    premissa: "Todos os princípios morais devem ser universais.",
    exemplo: "O respeito à vida é um princípio moral.",
    conclusao: "O respeito à vida deve ser universal.",
    correta: true,
    certo: "✅Correto! Moralidade universal evita contradições.",
    errado: "❌Incorreto. Negar isso torna a moralidade arbitrária."
  },
  {
    premissa: "Todos os atos que promovem a felicidade são bons.",
    exemplo: "A generosidade promove a felicidade.",
    conclusao: "A generosidade é boa.",
    correta: true,
    certo: "✅Correto! Generosidade inspira empatia e bem-estar.",
    errado: "❌Incorreto. Negar isso despreza o valor ético da generosidade."
  },
  {
    premissa: "Todos os atos que violam a dignidade humana são condenáveis.",
    exemplo: "A escravidão viola a dignidade humana.",
    conclusao: "A escravidão é condenável.",
    correta: true,
    certo: "✅Correto! Escravidão fere os direitos humanos fundamentais.",
    errado: "❌Incorreto. Relativizar isso ignora a dignidade humana."
  }
];

let atual = 0;

function iniciarEtica() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("app").style.display = "block";
  carregarQuestao();
}

function carregarQuestao() {
  const q = questoes[atual];
  document.getElementById("pergunta").innerHTML = `
    <p><strong>Premissa:</strong> ${q.premissa}</p>
    <p><strong>Exemplo:</strong> ${q.exemplo}</p>
    <p><strong>Conclusão:</strong> ${q.conclusao}</p>
    <p>Você concorda?</p>
  `;
  document.getElementById("botoes").innerHTML = `
    <button onclick="responder(true)">Sim</button>
    <button onclick="responder(false)">Não</button>
  `;
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("proxima").style.display = "none";
  atualizarProgresso();
}

function responder(resposta) {
  const q = questoes[atual];
  document.getElementById("feedback").innerHTML = resposta === q.correta ? q.certo : q.errado;
  document.getElementById("proxima").style.display = "inline-block";
}

function proximaQuestao() {
  atual++;
  if (atual < questoes.length) {
    carregarQuestao();
  } else {
    document.getElementById("progresso").style.display = "none";
    document.getElementById("pergunta").innerHTML = "<h2>Você concluiu as questões de ética!</h2>";
    document.getElementById("botoes").innerHTML = "";
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("proxima").style.display = "none";
    document.getElementById("voltar-menu-etica").style.display = "inline-block";
  }
}

function atualizarProgresso() {
  const blocos = [...Array(questoes.length).keys()]
    .map(i => i <= atual ? "▮" : "▯")
    .join("");
  document.getElementById("progresso").textContent = `Questão ${atual + 1}/${questoes.length} ${blocos}`;
}

// =====================
// MÓDULO: LÓGICA
// =====================
const questoesLogica = [
  {
    premissa: "Todos os números pares são divisíveis por 2.",
    exemplo: "O número 4 é um número par.",
    conclusao: "O número 4 é divisível por 2.",
    correta: true,
    certo: "✅Correto! Isso está de acordo com a definição de número par.",
    errado: "❌Incorreto. Um número par é sempre divisível por 2."
  },
  {
    premissa: "Todos os objetos no quarto estão na casa.",
    exemplo: "A cama está no quarto.",
    conclusao: "A cama está na casa.",
    correta: true,
    certo: "✅Correto! O quarto está na casa, logo a cama também.",
    errado: "❌Incorreto. Isso nega uma inclusão lógica simples."
  },
  {
    premissa: "Todos os triângulos têm três lados.",
    exemplo: "O triângulo ABC é um triângulo.",
    conclusao: "O triângulo ABC tem quatro lados.",
    correta: false,
    certo: "✅Correto! Triângulos com quatro lados não existem.",
    errado: "❌Incorreto. Isso contradiz a definição de triângulo."
  },
  {
    premissa: "Todos os números ímpares são maiores que 10.",
    exemplo: "O número 7 é ímpar.",
    conclusao: "O número 7 é maior que 10.",
    correta: false,
    certo: "✅Correto! 7 é ímpar, mas menor que 10.",
    errado: "❌Incorreto. A premissa é falsa neste caso."
  },
  {
    premissa: "Todos os humanos são mortais.",
    exemplo: "Sócrates é humano.",
    conclusao: "Sócrates é mortal.",
    correta: true,
    certo: "✅Correto! Clássico silogismo de lógica aristotélica.",
    errado: "❌Incorreto. A conclusão é inevitável com essas premissas."
  }
];

let atualLogica = 0;

function iniciarLogica() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("app-logica").style.display = "block";
  carregarQuestaoLogica();
}

function carregarQuestaoLogica() {
  const q = questoesLogica[atualLogica];
  document.getElementById("pergunta-logica").innerHTML = `
    <p><strong>Premissa:</strong> ${q.premissa}</p>
    <p><strong>Exemplo:</strong> ${q.exemplo}</p>
    <p><strong>Conclusão:</strong> ${q.conclusao}</p>
    <p>Você concorda?</p>
  `;
  document.getElementById("botoes-logica").innerHTML = `
    <button onclick="responderLogica(true)">Sim</button>
    <button onclick="responderLogica(false)">Não</button>
  `;
  document.getElementById("feedback-logica").innerHTML = "";
  document.getElementById("proxima-logica").style.display = "none";
  atualizarProgressoLogica();
}

function responderLogica(resposta) {
  const q = questoesLogica[atualLogica];
  document.getElementById("feedback-logica").innerHTML =
    resposta === q.correta ? q.certo : q.errado;
  document.getElementById("proxima-logica").style.display = "inline-block";
}

function proximaQuestaoLogica() {
  atualLogica++;
  if (atualLogica < questoesLogica.length) {
    carregarQuestaoLogica();
  } else {
    document.getElementById("progresso-logica").style.display = "none";
    document.getElementById("pergunta-logica").innerHTML = "<h2>Você concluiu as questões de lógica!</h2>";
    document.getElementById("botoes-logica").innerHTML = "";
    document.getElementById("feedback-logica").innerHTML = "";
    document.getElementById("proxima-logica").style.display = "none";
    document.getElementById("voltar-menu-logica").style.display = "inline-block";
  }
}

function atualizarProgressoLogica() {
  const blocos = [...Array(questoesLogica.length).keys()]
    .map(i => i <= atualLogica ? "▮" : "▯")
    .join("");
  document.getElementById("progresso-logica").textContent =
    `Questão ${atualLogica + 1}/${questoesLogica.length} ${blocos}`;
}

function voltarMenu() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("app").style.display = "none";
  document.getElementById("app-logica").style.display = "none";
  document.getElementById("app-metafisica").style.display = "none";

  // Esconde botões "Voltar" de cada módulo
  document.getElementById("voltar-menu-etica").style.display = "none";
  document.getElementById("voltar-menu-logica").style.display = "none";
  document.getElementById("voltar-menu-metafisica").style.display = "none";
}


// =====================
// MÓDULO: METAFÍSICA
//

const questoesMetafisica = [
  {
    premissa: "Todas as substâncias têm propriedades essenciais.",
    exemplo: "A alma é uma substância.",
    conclusao: "A alma tem propriedades essenciais.",
    correta: true,
    certo: "✅Correto! A alma, sendo uma substância, possui propriedades essenciais.",
    errado: "❌Incorreto. Isso negaria que a alma tenha uma natureza definida."
  },
  {
    premissa: "Todos os seres existem independentemente da percepção.",
    exemplo: "A matéria é um ser.",
    conclusao: "A matéria existe independentemente da percepção.",
    correta: true,
    certo: "✅Correto! A matéria é considerada existente mesmo sem ser percebida.",
    errado: "❌Incorreto. Isso implicaria que a matéria depende da percepção para existir."
  },
  {
    premissa: "Todas as causas têm efeitos.",
    exemplo: "A ação humana é uma causa.",
    conclusao: "A ação humana não tem efeitos.",
    correta: false,
    certo: "✅Correto! A ação humana gera efeitos; negar isso contradiz causalidade.",
    errado: "❌Incorreto. Isso nega a relação entre causa e efeito."
  },
  {
    premissa: "Todos os seres têm uma essência.",
    exemplo: "O ser humano é um ser.",
    conclusao: "O ser humano não tem uma essência.",
    correta: false,
    certo: "✅Correto! A visão tradicional da metafísica afirma que o ser humano tem essência.",
    errado: "❌Incorreto. Essa resposta contradiz a visão tradicional sobre a essência do ser."
  },
  {
    premissa: "Todos os eventos têm uma causa.",
    exemplo: "O universo teve um início.",
    conclusao: "O universo teve uma causa.",
    correta: true,
    certo: "✅Correto! O argumento cosmológico parte do princípio de causalidade universal.",
    errado: "❌Incorreto. Isso ignora a relação entre início e causa."
  }
];

let atualMetafisica = 0;

function iniciarMetafisica() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("app-metafisica").style.display = "block";
  carregarQuestaoMetafisica();
}

function carregarQuestaoMetafisica() {
  const q = questoesMetafisica[atualMetafisica];
  document.getElementById("pergunta-metafisica").innerHTML = `
    <p><strong>Premissa:</strong> ${q.premissa}</p>
    <p><strong>Exemplo:</strong> ${q.exemplo}</p>
    <p><strong>Conclusão:</strong> ${q.conclusao}</p>
    <p>Você concorda?</p>
  `;
  document.getElementById("botoes-metafisica").innerHTML = `
    <button onclick="responderMetafisica(true)">Sim</button>
    <button onclick="responderMetafisica(false)">Não</button>
  `;
  document.getElementById("feedback-metafisica").innerHTML = "";
  document.getElementById("proxima-metafisica").style.display = "none";
  atualizarProgressoMetafisica();
}

function responderMetafisica(resposta) {
  const q = questoesMetafisica[atualMetafisica];
  document.getElementById("feedback-metafisica").innerHTML =
    resposta === q.correta ? q.certo : q.errado;
  document.getElementById("proxima-metafisica").style.display = "inline-block";
}

function proximaQuestaoMetafisica() {
  atualMetafisica++;
  if (atualMetafisica < questoesMetafisica.length) {
    carregarQuestaoMetafisica();
  } else {
    document.getElementById("progresso-metafisica").style.display = "none";
    document.getElementById("pergunta-metafisica").innerHTML = "<h2>Você concluiu as questões de metafísica!</h2>";
    document.getElementById("botoes-metafisica").innerHTML = "";
    document.getElementById("feedback-metafisica").innerHTML = "";
    document.getElementById("proxima-metafisica").style.display = "none";
    document.getElementById("voltar-menu-metafisica").style.display = "inline-block";
  }
}

if (
  atual >= questoes.length &&
  atualLogica >= questoesLogica.length &&
  atualMetafisica >= questoesMetafisica.length
) {
  document.getElementById("certificado-card").style.display = "inline-block";
}


function atualizarProgressoMetafisica() {
  const blocos = [...Array(questoesMetafisica.length).keys()]
    .map(i => i <= atualMetafisica ? "▮" : "▯")
    .join("");
  document.getElementById("progresso-metafisica").textContent =
    `Questão ${atualMetafisica + 1}/${questoesMetafisica.length} ${blocos}`;
}



function mostrarCertificado() {
  const nome = document.getElementById("nome-usuario").value.trim();
  const canvas = document.getElementById("certificado");
  const ctx = canvas.getContext("2d");

  if (!nome) {
    alert("Por favor, digite seu nome antes de gerar o certificado.");
    return;
  }

  // Mostra o canvas
  canvas.style.display = "block";

  // Espera a imagem de fundo carregar antes de desenhar o nome
  const img = new Image();
  img.src = "certificado-base.png";
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Texto com o nome
    ctx.font = "bold 32px serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(nome, canvas.width / 2, 340); // ajuste Y conforme sua imagem
  };
}
