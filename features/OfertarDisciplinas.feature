GUI Scenarios

    Scenario: Professor cria uma disciplina com sucesso
        Given eu estou logado no sistema como um professor
        And eu estou na página de "Minhas Disciplinas"
        And eu consigo ver a disciplina "Matemática Discreta"
        When Eu clico para adicionar uma nova disciplina
        And eu preencho "nome_disciplina" com "Lógica para programação"
        And eu preencho "numero_vagas" com "60"
        And eu preencho "carga_horaria" com "75h"
        And eu preencho "departamento_ofertante" com "Centro de Informática"
        And eu preencho "horarios" com "seg 7:00 10:00" e  "ter 10:00 12:00"
        And eu clico em salvar
        Then eu ainda estou na aba de "Minhas Disciplinas"
        And eu posso ver "Matemática Discreta" E "Lógica para programação" e suas respectivas informações

    Scenario: Professor tenta criar uma disciplina sem nome
        Given eu estou logado no sistema como um professor
        And eu estou na página de "Minhas Disciplinas"
        And eu consigo ver a disciplina "Matemática Discreta"
        When Eu clico para adicionar uma nova disciplina
        And eu não preencho "nome_disciplina"
        And eu preencho "numero_vagas" com "60"
        And eu preencho "carga_horaria" com "75h"
        And eu preencho "departamento_ofertante" com "Centro de Informática"
        And eu preencho "horarios" com "seg,7:00,9:00;qua,10:00,12:00"
        And eu clico em salvar
        Then eu recebo uma mensagem de erro
        And eu continuo na mesma tela e posso modificar ou preencher os valores da disciplina sendo cadastrada

    Scenario: Professor remove uma disciplina
        Given eu estou logado no sistema como um professor
        And eu estou na página "Minhas Disciplinas"
        And eu vejo apenas as disciplinas "Matemática Discreta" e "Lógica para programação"
        When eu clico para remover a disciplina "Lógica para programação"
        And o sistema me pergunta se eu tenho certeza
        And eu clico que sim
        Then eu ainda estou na página "Minhas Disciplinas"
        And eu vejo apenas a disciplina "Matemática Discreta"
        And a disciplina é removida do sistema
        
    Scenario: Professor modifica o nome de uma disciplina
        Given eu estou logado no sistema como um professor
        And eu estou na página "Minhas Disciplinas"
        And eu vejo apenas as disciplinas "Matemática Discreta" e "Lógica para programação"
        When eu clico para modificar a disciplina "Matemática Discreta"
        And eu coloco o "nome" como "Matemática Discreta para Computação"
        And eu clico que confirmar
        Then eu ainda estou na página "Minhas Disciplinas"
        And eu vejo a disciplina "Matemática Discreta para Computação" e "Lógica para programação"

    Scenario: Professor tenta modifica o número de vagas de uma disciplina com sucesso
        Given eu estou logado no sistema como um professor
        And eu estou na página "Minhas Disciplinas"
        And eu vejo apenas as disciplinas "Matemática Discreta" e "Lógica para programação"
        And a disciplina "Matemática Discreta" possui "10" alunos matriculados
        When eu clico para modificar a disciplina "Matemática Discreta"
        And eu coloco o "numero de vagas" como "11"
        And eu clico que confirmar
        Then eu ainda estou na página "Minhas Disciplinas"
        And eu vejo a disciplina "Matemática Discreta" e "Lógica para programação"
        And a disciplina "Matemática Discreta" agora possui "11" como valor para o campo "numero_vagas"

    Scenario: Professor tenta modifica o número de vagas de uma disciplina para algo menor que o número de alunos matriculados
        Given eu estou logado no sistema como um professor
        And eu estou na página "Minhas Disciplinas"
        And eu vejo apenas as disciplinas "Matemática Discreta" e "Lógica para programação"
        And a disciplina "Matemática Discreta" possui "10" alunos matriculados
        When eu clico para modificar a disciplina "Matemática Discreta"
        And eu coloco o "numero de vagas" como "9"
        And eu clico que confirmar
        Then eu recebo uma mensagem de erro
        And eu continuo na mesma tela e posso modificar ou preencher os valores da disciplina sendo modificada

    
    Scenario: Professor tenta criar uma disciplina com nome repetido
        Given eu estou logado no sistema como um professor
        And eu estou na página de "Minhas Disciplinas"
        And eu consigo ver a disciplina "Matemática Discreta"
        When Eu clico para adicionar uma nova disciplina
        And eu preencho "nome_disciplina" com "Matemática Discreta"
        And eu preencho "numero_vagas" com "60"
        And eu preencho "carga_horaria" com "75h"
        And eu preencho "departamento_ofertante" com "Centro de Informática"
        And eu preencho "horarios" com "seg,7:00,9:00;qua,10:00,12:00"
        And eu clico em salvar
        Then eu recebo uma mensagem de erro
        And eu continuo na mesma tela e posso modificar ou preencher os valores da disciplina sendo cadastrada

System Scenarios
    Scenario: Cadastro de disciplina com "nome_disciplina" repetido
        Given Já existe no sistema uma disciplina com "nome_disciplina" "Matemática Discireta"
        When Tento cadastrar uma dsiciplina uma nova disciplina com "nome_disciplina" "Matemática Discireta"
        Then O sistema levanta mensagem de erro de chave "nome_disciplina" repetida
    
    Scenario: Cadastro de disciplina com "nome_disciplina" inválido
        Given Não existe no sistema uma disciplina com "nome_disciplina" "Matemática Discireta"
        When Tento cadastrar uma dsiciplina uma nova disciplina com "nome_disciplina" ""
        Then O sistema levanta mensagem de erro de chave "nome_disciplina" inválido

    Scenario: Tento modificar o número de vagas de uma disciplina para algo menor que o número de alunos matriculados
        Given Já existe uma disciplina com "nome_disciplina" "Matemática Discreta"
        And a disciplina "Matemática Discreta" possui "numero_vagas"
        And a disciplina "Matemática Discreta" possui quantidade de "alunos_matriculados"
        When o sistema tenta modificar "numero_vagas" para algo menor do que a quantidade de "alunos_matriculados" 
        Then O sistema levanta mensagem de erro de "novo valor para o numero de vagas inválido"
    