# UFPR - Universidade Federal do Paraná
## DS870 - Tópicos especiais em algoritmos
## Atividade 2

### Equipe:
* Guilherme Alves da Silva - GRR20186254
* Matheus Augusto de Moraes Ribeiro - GRR20176298
* Michelly Narita Kuriyama - GRR20175515

## Descrição da atividade:

##### O Gesto rMédico tem por objetivo auxiliar um médico a gerir seus pacientes e suas consultas.
* Esta aplicação será desenvolvida durante o semestre, cuidado para não perderem o que já foi desenvolvido.
* Para a entrega 02 será necessário usar o módulo Express e desenvolver a configuração inicial do servidor para ser capaz de realizar parsers usando a biblioteca querystringe json,além de atribuir uma porta para o serviço executar.
* Também será preciso configurar um arquivo .enve .env.exampleusando o módulo dotenv-safe (importe o módulo onde for necessário e crie os scripts de dev e start incluindo o módulo).
* Use o Sequelize para configurar os detalhes do banco de dados, além de criar o banco em si.
* Crie as migrations para as tabelas conforme o modelo apresentado ao final deste documento.
    * Tabelas Physicians, Patients e Appointments.
* Crie também os seeders incluindo ao menos 3 registros de médicos, 6 registros de pacientes e crie o agendamento de duas consultas para cada médico (podendo haver pacientes com consultas agendadas com mais de um médico).