GUI Scenarios

Scenario: Professor cria uma disciplina com sucesso
    Given eu estou logado no sistema como um professor
    And eu estou na página de “Minhas Disciplinas”
    And eu consigo ver a disciplina “Matemática Discreta”
    When Eu clico para adicionar uma nova disciplina
	And eu preencho “nome_disciplina” com “Lógica para programação”
	And eu preencho “numero_vagas” com “60”
	And eu preencho “carga_horaria” com “75h”
	And eu preencho “departamento_ofertante” com “Centro de Informática”
    And eu preencho “horarios” com “seg 7:00 10:00” e  “ter 10:00 12:00”
    And eu clico em salvar
    Then eu ainda estou na aba de “Minhas Disciplinas”
    And eu posso ver “Matemática Discreta” E “Lógica para programação” e suas respectivas informações

Scenario: Professor tenta criar uma disciplina sem nome
    Given eu estou logado no sistema como um professor
    And eu estou na página de “Minhas Disciplinas”
    And eu consigo ver a disciplina “Matemática Discreta”
    When Eu clico para adicionar uma nova disciplina
	And eu não preencho “nome_disciplina”
	And eu preencho “numero_vagas” com “60”
	And eu preencho “carga_horaria” com “75h”
	And eu preencho “departamento_ofertante” com “Centro de Informática”
    And eu preencho “horarios” com “seg,7:00,9:00;qua,10:00,12:00”
    And eu clico em salvar
    Then eu recebo uma mensagem de erro
    And eu continuo na mesma tela e posso modificar ou preencher os valores da disciplina sendo cadastrada

Scenario: Professor remove uma disciplina
    Given eu estou logado no sistema como um professor
    And eu estou na página “Minhas Disciplinas”
    And eu vejo apenas as disciplinas “Matemática Discreta” e “Lógica para programação”
    When eu clico para remover a disciplina “Lógica para programação”
    And o sistema me pergunta se eu tenho certeza
    And eu clico que sim
    Then eu ainda estou na página “Minhas Disciplinas”
    And eu vejo apenas a disciplina “Matemática Discreta”
    And a disciplina é removida do sistema
	
Scenario: Professor modifica o nome de uma disciplina
    Given eu estou logado no sistema como um professor
    And eu estou na página “Minhas Disciplinas”
    And eu vejo apenas as disciplinas “Matemática Discreta” e “Lógica para programação”
    When eu clico para modificar a disciplina “Matemática Discreta”
    And eu coloco o “nome” como “Matemática Discreta para Computação”
    And eu clico que confirmar
    Then eu ainda estou na página “Minhas Disciplinas”
    And eu vejo a disciplina “Matemática Discreta para Computação” e “Lógica para programação”
