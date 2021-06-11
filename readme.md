# UFPR - Universidade Federal do Paraná
## DS870 - Tópicos especiais em algoritmos
## Atividades 2 e 3

### Equipe:
* Guilherme Alves da Silva - GRR20186254
* Matheus Augusto de Moraes Ribeiro - GRR20176298
* Michelly Narita Kuriyama - GRR20175515

## Descrição da atividade:

#### O Gestor Médico tem por objetivo auxiliar um médico a gerir seus pacientes e suas consultas.

##### Entrega 2 

* Esta aplicação será desenvolvida durante o semestre, cuidado para não perderem o que já foi desenvolvido.
* Para a entrega 02 será necessário usar o módulo Express e desenvolver a configuração inicial do servidor para ser capaz de realizar parsers usando a biblioteca querystringe json,além de atribuir uma porta para o serviço executar.
* Também será preciso configurar um arquivo .enve .env.exampleusando o módulo dotenv-safe (importe o módulo onde for necessário e crie os scripts de dev e start incluindo o módulo).
* Use o Sequelize para configurar os detalhes do banco de dados, além de criar o banco em si.
* Crie as migrations para as tabelas conforme o modelo apresentado ao final deste documento.
    * Tabelas Physicians, Patients e Appointments.
* Crie também os seeders incluindo ao menos 3 registros de médicos, 6 registros de pacientes e crie o agendamento de duas consultas para cada médico (podendo haver pacientes com consultas agendadas com mais de um médico).

#### Entrega 3

* Desenvolva os modelos, incluindo os relacionamentos, para as 3 entidades que o sistema possui: 
    * Physicians, Patients e Appointments
* Inclua os controllers, endpoints e rotas necessárias para o CRUD de cada entidade
    * physicianController(não precisa procura por nome):
        * newPhysician, listAllPhysician, updatePhysician, deletePhysician
    * patientController(não precisa exclusão):
        * newPatient, searchPatientByName, searchPatientByPhysicianId, updatePatient
    * appointmentController(não precisa edição): 
        * newAppointment, searchAppointmentByPatientId, searchAppointmentByPhysicianId, deleteAppointment
* Não esqueça de incluir os possíveis erros e enviar o status na resposta do request.