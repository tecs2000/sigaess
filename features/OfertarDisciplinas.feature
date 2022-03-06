GUI Scenarios

    Scenario: Professor cria uma disciplina com sucesso
        Given Eu estou logado no sistema como um professor
        And Eu estou na página de "Minhas Disciplinas"
        And Eu consigo ver a disciplina "Matemática Discreta"
        When Eu clico para adicionar uma nova disciplina
        And Eu preencho "nome_disciplina" com "Lógica para programação"
        And Eu preencho "numero_vagas" com "60"
        And Eu preencho "carga_horaria" com "75h"
        And Eu preencho "departamento_ofertante" com "Centro de Informática"
        And Eu preencho "horarios" com "seg 7:00 10:00" e "ter 10:00 12:00"
        And Eu clico em salvar
        Then Eu ainda estou na aba de "Minhas Disciplinas"
        And Eu posso ver "Matemática Discreta" e "Lógica para programação" e suas respectivas informações

    Scenario: Professor tenta criar uma disciplina sem nome
        Given Eu estou logado no sistema como um professor
        And Eu estou na página de "Minhas Disciplinas"
        And Eu consigo ver a disciplina "Matemática Discreta"
        When Eu clico para adicionar uma nova disciplina
        And Eu não preencho "nome_disciplina"
        And Eu preencho "numero_vagas" com "60"
        And Eu preencho "carga_horaria" com "75h"
        And Eu preencho "departamento_ofertante" com "Centro de Informática"
        And Eu preencho "horarios" com "seg,7:00,9:00;qua,10:00,12:00"
        And Eu clico em salvar
        Then Eu recebo uma mensagem de erro
        And Eu continuo na mesma tela e posso modificar ou preencher os valores da disciplina sendo cadastrada

    Scenario: Professor remove uma disciplina
        Given Eu estou logado no sistema como um professor
        And Eu estou na página "Minhas Disciplinas"
        And Eu vejo apenas as disciplinas "Matemática Discreta" e "Lógica para programação"
        When Eu clico para remover a disciplina "Lógica para programação"
        And O sistema me pergunta se eu tenho certeza
        And Eu clico que sim
        Then Eu ainda estou na página "Minhas Disciplinas"
        And Eu vejo apenas a disciplina "Matemática Discreta"
        And A disciplina é removida do sistema
        
    Scenario: Professor modifica o nome de uma disciplina
        Given Eu estou logado no sistema como um professor
        And Eu estou na página "Minhas Disciplinas"
        And Eu vejo apenas as disciplinas "Matemática Discreta" e "Lógica para programação"
        When Eu clico para modificar a disciplina "Matemática Discreta"
        And Eu coloco o "nome" como "Matemática Discreta para Computação"
        And Eu clico que confirmar
        Then Eu ainda estou na página "Minhas Disciplinas"
        And Eu vejo a disciplina "Matemática Discreta para Computação" e "Lógica para programação"

    Scenario: Professor tenta modifica o número de vagas de uma disciplina com sucesso
        Given Eu estou logado no sistema como um professor
        And Eu estou na página "Minhas Disciplinas"
        And Eu vejo apenas as disciplinas "Matemática Discreta" e "Lógica para programação"
        And A disciplina "Matemática Discreta" possui "10" alunos matriculados
        When Eu clico para modificar a disciplina "Matemática Discreta"
        And Eu coloco o "numero_vagas" como "11"
        And Eu clico que confirmar
        Then Eu ainda estou na página "Minhas Disciplinas"
        And Eu vejo a disciplina "Matemática Discreta" e "Lógica para programação"
        And A disciplina "Matemática Discreta" agora possui "11" como valor para o campo "numero_vagas"

    Scenario: Professor tenta modifica o número de vagas de uma disciplina para algo menor que o número de alunos matriculados
        Given Eu estou logado no sistema como um professor
        And Eu estou na página "Minhas Disciplinas"
        And Eu vejo apenas as disciplinas "Matemática Discreta" e "Lógica para programação"
        And A disciplina "Matemática Discreta" possui "10" alunos matriculados
        When Eu clico para modificar a disciplina "Matemática Discreta"
        And Eu coloco o "numero_vagas" como "9"
        And Eu clico que confirmar
        Then Eu recebo uma mensagem de erro
        And Eu continuo na mesma tela e posso modificar ou preencher os valores da disciplina sendo modificada

    Scenario: Professor tenta criar uma disciplina com nome repetido
        Given Eu estou logado no sistema como um professor
        And Eu estou na página de "Minhas Disciplinas"
        And Eu consigo ver a disciplina "Matemática Discreta"
        When Eu clico para adicionar uma nova disciplina
        And Eu preencho "nome_disciplina" com "Matemática Discreta"
        And Eu preencho "numero_vagas" com "60"
        And Eu preencho "carga_horaria" com "75h"
        And Eu preencho "departamento_ofertante" com "Centro de Informática"
        And Eu preencho "horarios" com "seg,7:00,9:00;qua,10:00,12:00"
        And Eu clico em salvar
        Then Eu recebo uma mensagem de erro
        And Eu continuo na páginas "Minhas Disciplinas" e posso modificar ou preencher os valores da disciplina sendo cadastrada

System Scenarios

    Scenario: Cadastro de disciplina com "nome_disciplina" repetido
        Given Já existe no sistema uma disciplina com "nome_disciplina" "Matemática Discireta"
        When Tento cadastrar uma dsiciplina uma nova disciplina com "nome_disciplina" "Matemática Discireta"
        Then O sistema levanta mensagem de erro de chave "nome_disciplina" repetida
        And A disciplina não é cadastrada no sistema
    
    Scenario: Cadastro de disciplina com "nome_disciplina" inválido (vazio)
        Given Não existe no sistema uma disciplina com "nome_disciplina" "Matemática Discireta"
        When Tento cadastrar uma dsiciplina uma nova disciplina com "nome_disciplina" ""
        Then O sistema levanta mensagem de erro de chave "nome_disciplina" inválido
        And A disciplina não é cadastrada no sistema
    
    Scenario: Cadastro de disciplina com "nome_disciplina" inválido (caractere inválido)
        Given Não existe no sistema uma disciplina com "nome_disciplina" "Matemática Discireta"
        When Tento cadastrar uma dsiciplina uma nova disciplina com "nome_disciplina" "Дискретная математика"
        Then O sistema levanta mensagem de erro de chave "nome_disciplina" inválido
        And A disciplina não é cadastrada no sistema

    Scenario: Tento modificar o número de vagas de uma disciplina para algo menor que o número de alunos matriculados
        Given Já existe uma disciplina com "nome_disciplina" "Matemática Discreta"
        And A disciplina "Matemática Discreta" possui "numero_vagas"
        And A disciplina "Matemática Discreta" possui quantidade de "alunos_matriculados"
        When O sistema tenta modificar "numero_vagas" para algo menor do que a quantidade de "alunos_matriculados"
        Then O sistema levanta mensagem de erro de "novo valor para o número de vagas inválido"
        And Não ocorrem modificações nos dados salvos para a disciplina "Matemática Disciplinas" no sistema

    Scenario: Tento modificar o número de vagas de uma disciplina para o número de alunos matriculados
        Given Já existe uma disciplina com "nome_disciplina" "Matemática Discreta"
        And A disciplina "Matemática Discreta" possui "numero_vagas"
        And A disciplina "Matemática Discreta" possui quantidade de "alunos_matriculados"
        When O sistema tenta modificar "numero_vagas" para exatamente a quantidade de "alunos_matriculados"
        Then O sistema atualiza as informações da disciplina
        And Alunso não podem mais se matricular na disciplina "Matemática Discreta" já que está lotada

    Scenario: Modifico o número de vagas de uma disciplina para algo maior quando a quantidade de alunos máxima é alcançada
        Given Já existe uma disciplina com "nome_disciplina" "Matemática Discreta"
        And A disciplina "Matemática Discreta" possui "numero_vagas"
        And A disciplina "Matemática Discreta" possui quantidade de "alunos_matriculados" igual ao "numero_vagas"
        When o sistema tenta modificar "numero_vagas" para algo maior
        Then O sistema atualiza o número de vagas
        And As informações da disciplina "Matemática Discreta" são atualizadas no sistema
        And Agora a disciplina aparece com vagas para alunos não matriculados

    Scenario: Cadastro de disciplina com "carga_horaria" inválida (valor negativo)
        Given Não existe no sistema uma disciplina com "nome_disciplina" "Matemática Discireta"
        When Tento cadastrar uma dsiciplina uma nova disciplina com "carga_horaria" "-14h"
        Then O sistema levanta mensagem de erro de chave "carga_horaria" inválido
        And A nova disciplina "Matemática Discireta" não é cadastrada no sistema

    Scenario: Cadastro de disciplina com "carga_horaria" inválida (valor maior que o limite)
        Given Não existe no sistema uma disciplina com "nome_disciplina" "Matemática Discireta"
        When Tento cadastrar uma dsiciplina uma nova disciplina com "carga_horaria" "99999999999999999999999h"
        Then O sistema levanta mensagem de erro de chave "carga_horaria" inválido
        And A nova disciplina "Matemática Discireta" não é cadastrada no sistema