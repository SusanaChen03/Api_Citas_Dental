🐘🎯 Hexagonal Architecture, DDD & CQRS in PHP
codely.tv CodelyTV Courses Symfony 5.0 CI pipeline status

Example of a PHP application using Domain-Driven Design (DDD) and Command Query Responsibility Segregation (CQRS) principles keeping the code as simple as possible.

Take a look, play and have fun with this. Stars are welcome 😊

View Demo · Report a bug · Request a feature

🚀 Environment Setup
🐳 Needed tools
Install Docker
Clone this project: git clone https://github.com/CodelyTV/php-ddd-example php-ddd-example
Move to the project folder: cd php-ddd-example
🛠️ Environment configuration
Create a local environment file (cp .env .env.local) if you want to modify any parameter
🔥 Application execution
Install all the dependencies and bring up the project with Docker executing: make build
Then you'll have 3 apps available (2 APIs and 1 Frontend):
Mooc Backend: http://localhost:8030/health-check
Backoffice Backend: http://localhost:8040/health-check
Backoffice Frontend: http://localhost:8041/health-check
✅ Tests execution
Install the dependencies if you haven't done it previously: make deps
Execute PHPUnit and Behat tests: make test
👩‍💻 Project explanation
This project tries to be a MOOC (Massive Open Online Course) platform. It's decoupled from any framework, but it has some Symfony and Laravel implementations.

⛱️ Bounded Contexts
Mooc: Place to look in if you wanna see some code 🙂. Massive Open Online Courses public platform with users, videos, notifications, and so on.
Backoffice: Here you'll find the use cases needed by the Customer Support department in order to manage users, courses, videos, and so on.
🎯 Hexagonal Architecture
This repository follows the Hexagonal Architecture pattern. Also, it's structured using modules. With this, we can see that the current structure of a Bounded Context is:

$ tree -L 4 src

src
|-- Mooc // Company subdomain / Bounded Context: Features related to one of the company business lines / products
| `-- Videos // Some Module inside the Mooc context | |-- Application | | |-- Create // Inside the application layer all is structured by actions | | | |-- CreateVideoCommand.php | | | |-- CreateVideoCommandHandler.php | | | `-- VideoCreator.php
| | |-- Find
| | |-- Trim
| | `-- Update | |-- Domain | | |-- Video.php // The Aggregate of the Module | | |-- VideoCreatedDomainEvent.php // A Domain Event | | |-- VideoFinder.php | | |-- VideoId.php | | |-- VideoNotFound.php | | |-- VideoRepository.php // The `Interface`of the repository is inside Domain | | |-- VideoTitle.php | | |-- VideoType.php | | |-- VideoUrl.php | | `-- Videos.php // A collection of our Aggregate
| `-- Infrastructure // The infrastructure of our module | |-- DependencyInjection | `-- Persistence
| `--MySqlVideoRepository.php // An implementation of the repository `-- Shared // Shared Kernel: Common infrastructure and domain shared between the different Bounded Contexts
|-- Domain
`-- Infrastructure
Repository pattern
Our repositories try to be as simple as possible usually only containing 2 methods search and save. If we need some query with more filters we use the Specification pattern also known as Criteria pattern. So we add a searchByCriteria method.

You can see an example here and its implementation here.

Aggregates
You can see an example of an aggregate here. All aggregates should extend the AggregateRoot.

Command Bus
There is 1 implementations of the command bus.

Sync using the Symfony Message Bus
Query Bus
The Query Bus uses the Symfony Message Bus.

Event Bus
The Event Bus uses the Symfony Message Bus. The MySql Bus uses a MySql+Pulling as a bus. The RabbitMQ Bus uses RabbitMQ C extension.

📱 Monitoring
Every time a domain event is published it's exported to Prometheus. You can access to the Prometheus panel here.

🤔 Contributing
There are some things missing (add swagger, improve documentation...), feel free to add this if you want! If you want some guidelines feel free to contact us :)

🤩 Extra
This code was shown in the From framework coupled code to #microservices through #DDD talk and doubts where answered in the DDD y CQRS: Preguntas Frecuentes video.

🎥 Used in the CodelyTV Pro courses:

🇪🇸 DDD in PHP
🇪🇸 Arquitectura Hexagonal
🇪🇸 CQRS: Command Query Responsibility Segregation
🇪🇸 Comunicación entre microservicios: Event-Driven Architecture
