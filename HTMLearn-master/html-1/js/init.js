initdata();


function initdata() {
  if (!localStorage.users) {
    const users = [
      {
        username: "fabio",
        email: 'user1@gmail.com',
        password: "12345",
        nivel: 0,
        xp: 0,
        patente: 'Iniciante',
        avatar: '/assets/Avatar_masculino.png',
        profile: "admin",
        exercicios: ["quizzMedia+01:20","quizzElementos+01:20","quizzTabelas+01:20","quizzFormulários+01:20"]
      },
      {
        username: "Tiago",
        email: 'tiago@gmail.com',
        password: "12345",
        nivel: 0,
        xp: 0,
        patente: 'Iniciante',
        avatar: '/assets/Avatar_masculino.png',
        profile: "admin",
        exercicios: ["quizzMedia+00:50","quizzTabelas+00:50","quizzElementos+00:50","quizzFormulários+00:50",]
      },
      {
        username: "Manu",
        email: 'manu@gmail.com',
        password: "12345",
        nivel: 3,
        xp: 3100,
        patente: 'Iniciante',
        avatar: '/assets/Avatar_masculino.png',
        profile: "admin",
        exercicios: ["ex1Media", "ex2Media", "ex3Media", "ex4Media", "quizzMedia+00:31","quizzElementos+00:31","quizzTabelas+00:31","quizzFormulários+00:31"],
      },
      {
        username: "Jose",
        email: 'jose@gmail.com',
        password: "12345",
        nivel: 3,
        xp: 3100,
        patente: 'Iniciante',
        avatar: '/assets/Avatar_masculino.png',
        profile: "admin",
        exercicios: ["ex1Media", "ex2Media", "ex3Media", "ex4Media", "quizzMedia+00:40","quizzElementos+00:40","quizzTabelas+00:40","quizzFormulários+00:40"],
      },
    ];
    alert("inject data");
    localStorage.setItem("users", JSON.stringify(users));
  }
  if (!localStorage.exercises) {
    const exercises = [
      {
        modulo: "Tabelas",
        numero: 1,
        enunciado: [`Adiciona uma <i>table row</i> com 2 <i>table headers</i> com os valores "Nome" e "Idade", respetivamente.`],
        codigoDado: `<p class="pExercicio">&lt;table&gt;</p>
        <input type="text" class="inputExercicioTab1" id="ex1L1">&nbsp;<span class="checkLinha"
            id="checkEx1L1"></span><br>
        <input type="text" class="inputExercicioTab2" id="ex1L2">&nbsp;<span class="checkLinha"
            id="checkEx1L2"></span><br>
        <input type="text" class="inputExercicioTab2" id="ex1L3">&nbsp;<span class="checkLinha"
            id="checkEx1L3"></span><br>
        <input type="text" class="inputExercicioTab1" id="ex1L4">&nbsp;<span class="checkLinha"
            id="checkEx1L4"></span><br>
        <p class="pExercicioTab1">&lt;tr&gt;</p>
        <p class="pExercicioTab2">&lt;td&gt;João Pedro&lt;/td&gt;</p>
        <p class="pExercicioTab2">&lt;td&gt;22&lt;/td&gt;</p>
        <p class="pExercicioTab1">&lt;/tr&gt;</p>
        <p class="pExercicio">&lt;/table&gt;</p><br>`,
        respostas: ["<tr>", "<th>Nome</th>", "<th>Idade</th>", "</tr>"],
        dificuldade: "Fácil",
        recompensa: 400,
      },
      {
        modulo: "Tabelas",
        numero: 2,
        enunciado: [`Adiciona uma linha no fim da tabela com duas células.`, `As duas células devem ter o valor de "Mariana Silva" e "35", respetivamente.`],
        codigoDado: `<p class="pExercicio">&lt;table&gt;</p>
        <p class="pExercicioTab1">&lt;tr&gt;</p>
        <p class="pExercicioTab2">&lt;th&gt;Nome&lt;/th&gt;</p>
        <p class="pExercicioTab2">&lt;th&gt;Idade&lt;/th&gt;</p>
        <p class="pExercicioTab1">&lt;/tr&gt;</p>
        <p class="pExercicioTab1">&lt;tr&gt;</p>
        <p class="pExercicioTab2">&lt;td&gt;João Pedro&lt;/td&gt;</p>
        <p class="pExercicioTab2">&lt;td&gt;22&lt;/td&gt;</p>
        <p class="pExercicioTab1">&lt;/tr&gt;</p>
        <input type="text" class="inputExercicioTab1" id="ex2L1">&nbsp;<span class="checkLinha"
            id="checkEx2L1"></span><br>
        <input type="text" class="inputExercicioTab2" id="ex2L2">&nbsp;<span class="checkLinha"
            id="checkEx2L2"></span><br>
        <input type="text" class="inputExercicioTab2" id="ex2L3">&nbsp;<span class="checkLinha"
            id="checkEx2L3"></span><br>
        <input type="text" class="inputExercicioTab1" id="ex2L4">&nbsp;<span class="checkLinha"
            id="checkEx2L4"></span><br>
        <p class="pExercicio">&lt;/table&gt;</p><br>`,
        respostas: ["<tr>", "<td>Mariana Silva</td>", "<td>35</td>", "</tr>"],
        dificuldade: "Fácil",
        recompensa: 400,
      },
      {
        modulo: "Tabelas",
        numero: 3,
        enunciado: [`Usa o atributo correto para fazer o primeiro <i>th</i>, com valor "Nome", expandir-se por duas colunas.`],
        codigoDado: `<p class="pExercicio">&lt;table&gt;</p>
        <p class="pExercicioTab1">&lt;tr&gt;</p>
        <input type="text" class="inputExercicioTab2" id="ex3L1"><br>
        <p class="pExercicioTab1">&lt;/tr&gt;</p>
        <p class="pExercicioTab1">&lt;tr&gt;</p>
        <p class="pExercicioTab2">&lt;td&gt;João Pedro&lt;/td&gt;</p>
        <p class="pExercicioTab2">&lt;td&gt;Mariana Silva&lt;/td&gt;</p>
        <p class="pExercicioTab1">&lt;/tr&gt;</p>
        <p class="pExercicio">&lt;/table&gt;</p><br>`,
        respostas: [`<th colspan="2">Nome</th>`],
        dificuldade: "Médio",
        recompensa: 500,
      },
      {
        modulo: "Tabelas",
        numero: 4,
        enunciado: [`Usa o atributo correto para fazer o primeiro <i>td</i>, com valor "João Pedro", expandir-se por duas linhas.`],
        codigoDado: `<p class="pExercicio">&lt;table&gt;</p>
        <p class="pExercicioTab1">&lt;tr&gt;</p>
        <p class="pExercicioTab2">&lt;th&gt;Nome&lt;/th&gt;</p>
        <p class="pExercicioTab2">&lt;th&gt;Contactos&lt;/th&gt;</p>
        <p class="pExercicioTab1">&lt;/tr&gt;</p>
        <p class="pExercicioTab1">&lt;tr&gt;</p>
        <input type="text" class="inputExercicioTab2" id="ex4L1"><br>
        <p class="pExercicioTab2">&lt;td&gt;912345678&lt;/td&gt;</p>

        <p class="pExercicioTab1">&lt;tr&gt;</p>
        <p class="pExercicioTab2">&lt;td&gt;912345678&lt;/td&gt;</p>
        <p class="pExercicioTab1">&lt;/tr&gt;</p>
        <p class="pExercicio">&lt;/table&gt;</p><br>`,
        respostas: [`<td rowspan="2">João Pedro</td>`],
        dificuldade: "Médio",
        recompensa: 500,
      },
      {
        modulo: "Media",
        numero: 1,
        enunciado: [`Complete a seguinte linha de forma correta:`],
        codigoDado: `<p class="pExercicio">&lt;img <input type="text"id="ex1L1" class="inputExercicioPequeno">="Ola.png" alt="Olá"&gt;</p><br>`,
        respostas: [`src`],
        dificuldade: "Fácil",
        recompensa: 400,
      },
      {
        modulo: "Media",
        numero: 2,
        enunciado: [`Dimensiona a imagem com 100px de altura e 50px de largura:`],
        codigoDado: `<p class="pExercicio">&lt;img src="Ola.png" alt="Olá" <input type="text" id="ex2L1" class="inputExercicio"> &gt;</p><br>`,
        respostas: [`height="100px" width="50px"`],
        dificuldade: "Médio",
        recompensa: 500,
      },
      {
        modulo: "Media",
        numero: 3,
        enunciado: [`Preenche os seguintes espaços para um vídeo em formato MP4:`],
        codigoDado: `<p class="pExercicio">&lt;video width="320" height="240" controls&gt;</p>
        <p class="pExercicioTab1">&lt;<input type="text" id="ex3L1" class="inputExercicioPequeno"> src="movie.<input type="text" id="ex3L2" class="inputExercicioPequeno">" type="video/<input type="text" id="ex3L3" class="inputExercicioPequeno">"&gt;</p>
        <p class="pExercicio">&lt;/video&gt;</p><br>`,
        respostas: [`source`, `mp4`, `mp4`],
        dificuldade: "Médio",
        recompensa: 500,
      },
      {
        modulo: "Media",
        numero: 4,
        enunciado: [`Faz com que o vídeo comece automaticamente.`],
        codigoDado: `<p class="pExercicio">&lt;video width="320" height="240" <input type="text" id="ex4L1" class="inputExercicioPequeno">&gt;</p>
        <p class="pExercicioTab1">&lt;source src="movie.mp4" type="video/mp4"&gt;</p>
        <p class="pExercicioTab1">&lt;source src="movie.ogg" type="video/ogg"&gt;</p>
        <p class="pExercicio">&lt;/video&gt;</p><br>`,
        respostas: [`autoplay`],
        dificuldade: "Fácil",
        recompensa: 400,
      },
      {
        modulo: "Elementos",
        numero: 1,
        enunciado: [`Cria um parágrafo com o texto "Bom dia".`],
        codigoDado: `<input type="text" id="ex1L1" class="inputExercicio"><br><br>`,
        respostas: [`<p>Bom dia</p>`],
        dificuldade: "Fácil",
        recompensa: 400,
      },
      {
        modulo: "Elementos",
        numero: 2,
        enunciado: [`Separa a frase em 2 partes.`],
        codigoDado: `<p class="pExercicio">Hoje está um <input type="text" id="ex2L1" class="inputExercicio"> bom dia de sol.</p><br>`,
        respostas: [`<br>`],
        dificuldade: "Fácil",
        recompensa: 400,
      },
      {
        modulo: "Elementos",
        numero: 3,
        enunciado: [`Depois de usar a tag &lt;h1&gt;, que tag devo usar para criar outro cabeçalho menor?`,
          `Escreve "Parágrafo 2" no conteúdo.`],
        codigoDado: `<p class="pExercicio">&lt;h1&gt;Parágrafo 1&lt;/h1&gt;</p>
        <input type="text" id="ex3L1" class="inputExercicio"><br><br>`,
        respostas: [`<h2>Parágrafo 2</h2>`],
        dificuldade: "Fácil",
        recompensa: 400,
      },
      {
        modulo: "Elementos",
        numero: 4,
        enunciado: [`Como devo começar uma página de HTML?`],
        codigoDado: `<input type="text" id="ex4L1" class="inputExercicio"><br><br>`,
        respostas: [`<html>`],
        dificuldade: "Fácil",
        recompensa: 400,
      },
      {
        modulo: "Formulários",
        numero: 1,
        enunciado: [`Faz uma caixa de texto com tamanho de 10px.`],
        codigoDado: `<p class="pExercicio">&lt;form&gt;</p>
        <p class="pExercicioTab1">&lt;input type="<input type="text" id="ex1L1" class="inputExercicioPequeno">" size="<input type="text" id=ex1L2 class=inputExercicioPequeno>"&gt;</p>
        <p class="pExercicio">&lt;/form&gt;</p><br>`,
        respostas: [`text`, `10px`],
        dificuldade: "Fácil",
        recompensa: 400,
      },
      {
        modulo: "Formulários",
        numero: 2,
        enunciado: [`Faz uma caixa de texto com o valor predefinido "HTMLearn".`],
        codigoDado: `<p class="pExercicio">&lt;form&gt;</p>
        <p class="pExercicioTab1">&lt;input type="text" <input type="text" id="ex2L1" class="inputExercicioPequeno">="HTMLearn"&gt;</p>
        <p class="pExercicio">&lt;/form&gt;</p><br>`,
        respostas: [`value`],
        dificuldade: "Fácil",
        recompensa: 400,
      },
      {
        modulo: "Formulários",
        numero: 3,
        enunciado: [`Cria um botão com o texto "ok".`],
        codigoDado: `<p class="pExercicio">&lt;form&gt;</p>
        <p class="pExercicioTab1">&lt;input type="<input type="text" id="ex3L1" class="inputExercicioPequeno">" <input type="text" id="ex3L2" class="inputExercicioPequeno">="ok"&gt;</p>
        <p class="pExercicio">&lt;/form&gt;</p><br>`,
        respostas: [`button`, `value`],
        dificuldade: "Fácil",
        recompensa: 400,
      },
      {
        modulo: "Formulários",
        numero: 4,
        enunciado: [`Faz um botão de submit.`],
        codigoDado: `<p class="pExercicio">&lt;form&gt;</p>
        <p class="pExercicioTab1">&lt;input type="<input type="text" id="ex4L1" class="inputExercicioPequeno">" value="Submit"&gt;</p>
        <p class="pExercicio">&lt;/form&gt;</p><br>`,
        respostas: [`submit`],
        dificuldade: "Fácil",
        recompensa: 400,
      },
    ]
    localStorage.setItem("exercises", JSON.stringify(exercises));
    alert("inject exercises");
  }
  if (!localStorage.quizzes) {
    const quizzes = [
      {
        modulo: "Tabelas",
        numero: 1,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "Qual é o elemento que define uma tabela?",
        respostas: ["&lt;tables&gt;", "&lt;table&gt;", "&lt;form&gt;"],
        respostaCerta: 2,
      },
      {
        modulo: "Tabelas",
        numero: 2,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Qual destes conjuntos inclui apenas elementos de uma tabela?",
        respostas: ["&lt;table&gt;, &lt;head&gt;, &lt;tfoot&gt;", "&lt;table&gt;, &lt;tr&gt;, &lt;td&gt;", "&lt;thead&gt;, &lt;body&gt;, &lt;tr&gt;", "&lt;table&gt;, &lt;tr&gt;, &lt;tt&gt;"],
        respostaCerta: 2,
      },
      {
        modulo: "Tabelas",
        numero: 3,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Para que serve o elemento <i>th</i>?",
        respostas: ["Coloca o texto a negrito para distinguir as linhas das colunas.", "Para fazer uma célula ocupar duas linhas.", "Faz com que o conteúdo da célula seja o cabeçalho da tabela e coloca o texto no centro a negrito."],
        respostaCerta: 3,
      },
      {
        modulo: "Tabelas",
        numero: 4,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Como expandir uma célula por mais do que uma coluna?",
        respostas: ["rowspan", "colspan", "align center"],
        respostaCerta: 2,
      },
      {
        modulo: "Tabelas",
        numero: 5,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: `Esta tabela está correta?<br>
        &lt;table&gt<br>
        &nbsp;&nbsp;&nbsp;&lt;tr&gt&lt;td&gtOlá Rúben&lt;/td&gt&lt;tr&gt<br>
        &nbsp;&nbsp;&nbsp;&lt;tr&gtBom dia&lt;/tr&gt<br>
        &lt;/table&gt`,
        respostas: ["Sim", "Não"],
        respostaCerta: 2,
      },
      {
        modulo: "Tabelas",
        numero: 6,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Como expandir uma célula por múltiplas linhas?",
        respostas: ["rowspan", "colspan", "align center"],
        respostaCerta: 1,
      },
      {
        modulo: "Tabelas",
        numero: 7,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: `Quantas rows temos nesta tabela?
        &lt;table&gt<br>
        &nbsp;&nbsp;&nbsp;&lt;tr&gt&lt;td&gtCol 1&lt;/td&gt&lt;tr&gt<br>
        &nbsp;&nbsp;&nbsp;&lt;tr&gt&lt;td&gtCol 2&lt;/td&gt&lt;tr&gt<br>
        &lt;/table&gt
        `,

        respostas: ["4", "6", "2", "3"],
        respostaCerta: 3,
      },
      {
        modulo: "Tabelas",
        numero: 8,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Qual o significado de rowspan='3'?",
        respostas: ["Número de células que a coluna vai expandir", "Número de células que uma linha se vai expandir"],
        respostaCerta: 2,
      },
      {
        modulo: "Tabelas",
        numero: 9,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "Onde acrescentar uma borda na tabela?",
        respostas: ["Na tag &lt;html&gt", "Na tag &lt;body&gt", "Na tag &lt;tittle&gt", "Na tag &lt;table&gt"],
        respostaCerta: 4,
      },
      {
        modulo: "Tabelas",
        numero: 10,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "Onde abrir a tag da tabela?",
        respostas: ["Antes do &lt;html&gt", "Antes do &lt;tittle&gt", "Depois de &lt;tr&gt", "Entre &lt;body&gt e &lt;/body&gt"],
        respostaCerta: 4,
      },
      {
        modulo: "Elementos",
        numero: 1,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "Posso usar primeiro a tag &lt;h2&gt antes da tag &lt;h1&gt?",
        respostas: ["Sim", "Não"],
        respostaCerta: 1,
      },
      {
        modulo: "Elementos",
        numero: 2,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "Posso iniciar uma pagina html sem usar a tag &lt;html&gt ?",
        respostas: ["Sim", "Não"],
        respostaCerta: 2,
      },
      {
        modulo: "Elementos",
        numero: 3,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "É obrigatório fechar a tag &lt;p&gt?",
        respostas: ["Sim", "Não"],
        respostaCerta: 1,
      },
      {
        modulo: "Elementos",
        numero: 4,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "É obrigatório fechar a tag &lt;h1&gt?",
        respostas: ["Sim", "Não"],
        respostaCerta: 1,
      },
      {
        modulo: "Elementos",
        numero: 5,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Qual é o significado da tag &lt;br&gt?",
        respostas: ["Brasil", "Broke row", "Break row", "Line break"],
        respostaCerta: 4,
      },
      {
        modulo: "Elementos",
        numero: 6,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "A tag &lt;P&gt tem o mesmo significado que a tag &lt;p&gt?",
        respostas: ["Sim", "Não"],
        respostaCerta: 1,
      },
      {
        modulo: "Elementos",
        numero: 7,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "Onde se deve colocar a tag &lt;h1&gt?",
        respostas: ["&lt;body&gt", "&lt;tittle&gt", "&lt;head&gt"],
        respostaCerta: 1,
      },
      {
        modulo: "Elementos",
        numero: 8,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Qual a tag que define o texto a negrito?",
        respostas: ["&lt;i&gt", "&lt;bold&gt", "&lt;strong&gt", "&lt;b&gt"],
        respostaCerta: 4,
      },
      {
        modulo: "Elementos",
        numero: 9,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "Qual símbolo se utiliza para fechar uma tag?",
        respostas: ["&lt;", "&gt", "/", "|"],
        respostaCerta: 3,
      },
      {
        modulo: "Elementos",
        numero: 10,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "A tag &lt;br&gt precisa de ser fechada?",
        respostas: ["Sim", "Não"],
        respostaCerta: 2,
      },
      {
        modulo: "Media",
        numero: 1,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Para criar uma imagem é obrigatorio ter 'alt'?",
        respostas: ["Sim", "Não"],
        respostaCerta: 2,
      },
      {
        modulo: "Media",
        numero: 2,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "Para criar uma imagem qual tag devemos usar?",
        respostas: ["&lt;img&gt", "&lt;pic&gt", "&lt;i&gt"],
        respostaCerta: 1,
      },
      {
        modulo: "Media",
        numero: 3,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "É obrigatório fechar a tag &lt;img&gt",
        respostas: ["Sim", "Não"],
        respostaCerta: 2,
      },
      {
        modulo: "Media",
        numero: 4,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "É obrigatorio fechar a tag &lt;video&gt",
        respostas: ["Sim", "Não"],
        respostaCerta: 1,
      },
      {
        modulo: "Media",
        numero: 5,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Posso criar 2 imagens com o mesmo nome?",
        respostas: ["Sim", "Não"],
        respostaCerta: 2,
      },
      {
        modulo: "Media",
        numero: 6,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "O código seguinte está certo? &lt;img src=img.png alt='img'",
        respostas: ["Sim", "Não"],
        respostaCerta: 2,
      },
      {
        modulo: "Media",
        numero: 7,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "O código seguinte está certo? &lt;img src='img.png' alt='img'",
        respostas: ["Sim", "Não"],
        respostaCerta: 2,
      },
      {
        modulo: "Media",
        numero: 8,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "Quais dos seguintes formatos não fazem parte para a constituição de uma imagem?",
        respostas: ["jpg", "png", "picture"],
        respostaCerta: 3,
      },
      {
        modulo: "Media",
        numero: 9,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "O código seguinte está certo? &lt;img src='img.png' alt='img'&gt&lt;/img&gt",
        respostas: ["Sim", "Não"],
        respostaCerta: 2,
      },
      {
        modulo: "Media",
        numero: 10,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: `O código seguinte está certo
        &lt;video width="320" height="240" &gt&lt;/video&gt<br>
        &lt;source src="movie.mp4 type="video/mp4"&gt<br>
        &lt;source src="movie.ogg type="video/ogg"&gt<br>
        `,
        respostas: ["Sim", "Não"],
        respostaCerta: 2,
      },
      {
        modulo: "Formulários",
        numero: 1,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Para criar uma caixa de texto, precisamos de um input type...?",
        respostas: ["texto", "text", "textrectangle"],
        respostaCerta: 2,
      },
      {
        modulo: "Formulários",
        numero: 2,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "Posso ter caixas de texto fora do form?",
        respostas: ["Sim", "Não"],
        respostaCerta: 2,
      },
      {
        modulo: "Formulários",
        numero: 3,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Para fazermos um dropdown precisamos de um?",
        respostas: ["drop", "row", "select"],
        respostaCerta: 3,
      },
      {
        modulo: "Formulários",
        numero: 4,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Sem um action no form podemos submeter o formulário?",
        respostas: ["Sim", "Não"],
        respostaCerta: 1,
      },
      {
        modulo: "Formulários",
        numero: 5,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "Para termos texto por cima da caixa de texto precisamos sempre do 'label'? ",
        respostas: ["Sim", "Não"],
        respostaCerta: 1,
      },
      {
        modulo: "Formulários",
        numero: 6,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "Para redirecionar para outra pagina precisamos de um action no form ele deve estar?",
        respostas: ["Dentro do form", "Antes do form", "Na linha da tag form"],
        respostaCerta: 3,
      },
      {
        modulo: "Formulários",
        numero: 7,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "E obrigatorio fechar a tag &lt;form&gt",
        respostas: ["Sim", "Não"],
        respostaCerta: 1,
      },
      {
        modulo: "Formulários",
        numero: 8,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "É obrigatório fechar a tag &lt;input&gt",
        respostas: ["Sim", "Não"],
        respostaCerta: 2,
      },
      {
        modulo: "Formulários",
        numero: 9,
        dificuldade: "Fácil",
        recompensa: 100,
        pergunta: "Podemos usar um botão como um submit?",
        respostas: ["Sim", "Não"],
        respostaCerta: 1,
      },
      {
        modulo: "Formulários",
        numero: 10,
        dificuldade: "Médio",
        recompensa: 200,
        pergunta: "A varivel 'value' representa o texto que vai aprarecer na caixa de texto?",
        respostas: ["Sim", "Não"],
        respostaCerta: 1,
      },
    ]
    alert("inject quizzes");
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
  }

}