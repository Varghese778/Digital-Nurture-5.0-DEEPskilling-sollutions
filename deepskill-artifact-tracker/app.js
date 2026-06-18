// ═══════════════════════════════════════════════════════
//  Digital Nurture 5.0 — Application Engine (Timeline Path)
// ═══════════════════════════════════════════════════════

function getRepoRoot() {
    const loc = window.location.href;
    const dir = loc.substring(0, loc.lastIndexOf('/'));
    return dir.substring(0, dir.lastIndexOf('/'));
}

const studyData = {
    phase1: {
        title: "Phase 1: Engineering Concepts & Languages",
        duration: "June 18 – June 23 (6 Days)",
        tasks: [
            {
                day: "Day 1 (Jun 18)",
                title: "Design Patterns & Principles",
                desc: "Master SOLID principles and standard Creational/Structural/Behavioral patterns.",
                docs: [
                    {
                        category: "Design Patterns & SOLID (Module 1)",
                        links: [
                            { name: "SOLID Principles Guide", url: "https://www.baeldung.com/solid-principles" },
                            { name: "Design Patterns Overview", url: "https://medium.com/@softwaretechsolution/design-pattern-81ef65829de2" }
                        ]
                    }
                ],
                files: [
                    { name: "Design Patterns Doc", path: "Java FSE/Deepskilling/Engineering concepts/Design Patterns and Principles.docx" }
                ],
                mandatory: [
                    "Exercise 1: Implementing the Singleton Pattern",
                    "Exercise 2: Implementing the Factory Method Pattern"
                ]
            },
            {
                day: "Day 2 (Jun 19)",
                title: "Data Structures & Algorithms",
                desc: "Re-baseline arrays, searching, and sorting complexities.",
                docs: [
                    {
                        category: "Data Structures & Algorithms (Module 2)",
                        links: [
                            { name: "Design & Analysis of Algorithms", url: "https://www.geeksforgeeks.org/design-and-analysis-of-algorithms/" },
                            { name: "Sorting Algorithms", url: "https://www.geeksforgeeks.org/sorting-algorithms/" },
                            { name: "Array Data Structure Guide", url: "https://www.geeksforgeeks.org/array-data-structure-guide/" },
                            { name: "Linked List in Java", url: "https://www.geeksforgeeks.org/linked-list-in-java/" },
                            { name: "Searching Algorithms Basics", url: "https://www.geeksforgeeks.org/searching-algorithms/#basics-of-searching-algorithms" }
                        ]
                    }
                ],
                files: [
                    { name: "Algorithms & DSA Doc", path: "Java FSE/Deepskilling/Engineering concepts/Algorithms_Data Structures.docx" }
                ],
                mandatory: [
                    "Exercise 2: E-commerce Platform Search Function",
                    "Exercise 7: Financial Forecasting"
                ]
            },
            {
                day: "Day 3 (Jun 20)",
                title: "PL/SQL Programming",
                desc: "Learn Oracle PL/SQL control structures, cursors, procedures, functions, packages, and triggers.",
                docs: [
                    {
                        category: "PL/SQL Programming (Module 3)",
                        links: [
                            { name: "PL/SQL Introduction", url: "https://www.geeksforgeeks.org/plsql-introduction/" },
                            { name: "PL/SQL Block Structure", url: "https://www.educba.com/pl-sql-block-structure/" },
                            { name: "PL/SQL Basic Syntax", url: "https://www.tutorialspoint.com/plsql/plsql_basic_syntax.htm" },
                            { name: "Oracle: Control Structures", url: "https://docs.oracle.com/cd/A97630_01/appdev.920/a96624/04_struc.htm" },
                            { name: "Oracle: Error Handling", url: "https://docs.oracle.com/cd/B13789_01/appdev.101/b10807/07_errs.htm" },
                            { name: "PL/SQL Cursors", url: "https://www.tutorialspoint.com/plsql/plsql_cursors.htm" },
                            { name: "Procedures & Functions", url: "https://docs.oracle.com/en/database/other-databases/timesten/22.1/plsql-developer/pl-sql-procedures-and-functions.html" },
                            { name: "PL/SQL Packages", url: "https://docs.oracle.com/en/database/oracle/oracle-database/23/Inpls/plsql-packages.html" },
                            { name: "PL/SQL Triggers", url: "https://docs.oracle.com/en/database/oracle/oracle-database/19/Inpls/plsql-triggers.html" }
                        ]
                    }
                ],
                files: [
                    { name: "PLSQL Exercises", path: "Java FSE/Deepskilling/PL SQL programming/PLSQL_Exercises.docx" }
                ],
                mandatory: [
                    "Exercise 1: Control Structures",
                    "Exercise 3: Stored Procedures"
                ]
            },
            {
                day: "Days 4-6 (Jun 21-23)",
                title: "TDD (JUnit5 & Mockito) + Logging",
                desc: "Write unit tests, mock dependencies, and implement SLF4J logging.",
                docs: [
                    {
                        category: "TDD & Unit Testing (Module 4)",
                        links: [
                            { name: "Test-Driven Development (TDD)", url: "https://www.geeksforgeeks.org/test-driven-development-tdd/" },
                            { name: "5 Steps of TDD", url: "https://developer.ibm.com/articles/5-steps-of-test-driven-development/" },
                            { name: "TDD Concept & Focus", url: "https://medium.com/@rubenghosh968/test-driven-development-55af68347fdd" },
                            { name: "Unit Testing Overview", url: "https://www.geeksforgeeks.org/unit-testing-software-testing/" },
                            { name: "Unit vs Integration Testing", url: "https://www.geeksforgeeks.org/difference-between-unit-testing-and-integration-testing/" },
                            { name: "Introduction to JUnit 5", url: "https://www.geeksforgeeks.org/introduction-to-junit-5/" },
                            { name: "Unit Testing Best Practices", url: "https://www.geeksforgeeks.org/unit-testing-best-practices/" },
                            { name: "AAA Pattern", url: "https://semaphore.io/blog/aaa-pattern-test-automation" },
                            { name: "JUnit 5 Parameterized Tests", url: "https://www.geeksforgeeks.org/junit-5-how-to-write-parameterized-tests/" },
                            { name: "JUnit 5 ParameterizedTest Annotation", url: "https://www.geeksforgeeks.org/junit-5-parameterizedtest/" },
                            { name: "JUnit 5 Test Suites with Examples", url: "https://www.geeksforgeeks.org/junit-5-test-suites-with-example/" },
                            { name: "JUnit 5 Test Execution Order", url: "https://www.geeksforgeeks.org/junit-5-test-execution-order/" },
                            { name: "Test Execution in Testing", url: "https://www.geeksforgeeks.org/test-execution-for-software-testing/" },
                            { name: "Testing Exceptions in JUnit 5", url: "https://www.javacodegeeks.com/2017/06/testing-exceptions-junit-5.html" },
                            { name: "JUnit 5 Timeout Handling", url: "https://www.geeksforgeeks.org/junit-5-timeout/" },
                            { name: "Performance Testing Basics", url: "https://www.geeksforgeeks.org/performance-testing-software-testing/" }
                        ]
                    },
                    {
                        category: "Mockito & Logging Framework (Module 4)",
                        links: [
                            { name: "Mockito Tutorials & Examples", url: "https://www.javacodegeeks.com/mockito-tutorials" },
                            { name: "Testing in Spring Boot", url: "https://www.geeksforgeeks.org/testing-in-spring-boot/" },
                            { name: "Autowired vs InjectMocks", url: "https://www.geeksforgeeks.org/autowired-injectmocks-spring-boot-tests/" },
                            { name: "Mocking Repositories & DAOs", url: "https://www.javacodegeeks.com/2024/12/mocking-repositories-and-daos-in-java-with-mockito.html" },
                            { name: "Automation Testing Basics", url: "https://www.geeksforgeeks.org/automation-testing-software-testing/" },
                            { name: "SLF4J Tutorial", url: "https://www.tutorialspoint.com/slf4j/index.htm" }
                        ]
                    },
                    {
                        category: "Lombok Tooling (Module 4)",
                        links: [
                            { name: "Lombok Intro & Setup", url: "https://www.geeksforgeeks.org/java/introduction-to-project-lombok-in-java-and-how-to-get-started/" },
                            { name: "Introduction to Lombok", url: "https://www.baeldung.com/intro-to-project-lombok" },
                            { name: "Complete Guide to Project Lombok", url: "https://auth0.com/blog/a-complete-guide-to-lombok/" },
                            { name: "Lombok Annotations & Examples", url: "https://www.javaguides.net/2019/05/project-lombok-annotations-examples.html" },
                            { name: "Lombok Builder Annotation", url: "https://www.baeldung.com/lombok-builder" },
                            { name: "Lombok Constructor Annotations", url: "https://examples.javacodegeeks.com/lombok-constructor-annotation/" }
                        ]
                    }
                ],
                files: [
                    { name: "1. JUnit Basic Testing", path: "Java FSE/Deepskilling/JUnit, Mockito and SL4J/1. JUnit_Basic Testing Exercises.pdf" },
                    { name: "2. JUnit Advanced Testing", path: "Java FSE/Deepskilling/JUnit, Mockito and SL4J/2. JUnit_Advanced Testing exercices.pdf" },
                    { name: "3. Mockito Basic Exercises", path: "Java FSE/Deepskilling/JUnit, Mockito and SL4J/3. Mockito exercises.pdf" },
                    { name: "3. Mockito Advanced Exercises v2", path: "Java FSE/Deepskilling/JUnit, Mockito and SL4J/3. Mockito exercises_v2.pdf" },
                    { name: "4. Spring Integration Testing", path: "Java FSE/Deepskilling/JUnit, Mockito and SL4J/4. JUnit_Spring Test exercises.pdf" },
                    { name: "5. Mockito Spring Boot", path: "Java FSE/Deepskilling/JUnit, Mockito and SL4J/5. Mockito Spring Boot exercises.pdf" },
                    { name: "6. SL4J Logging Exercises", path: "Java FSE/Deepskilling/JUnit, Mockito and SL4J/6. SL4J Logging exercises.pdf" }
                ],
                mandatory: [
                    "JUnit Basic: Setting Up JUnit, Assertions in JUnit",
                    "Mockito: Mocking and Stubbing",
                    "SL4J: Logging Error Messages"
                ]
            }
        ]
    },
    phase2: {
        title: "Phase 2: Spring Boot Frameworks & Microservices",
        duration: "June 24 – July 4 (11 Days)",
        tasks: [
            {
                day: "Days 7-8 (Jun 24-25)",
                title: "Spring Core & Maven",
                desc: "Understand IoC Containers, Dependency Injection, AOP, and POM builds.",
                docs: [
                    {
                        category: "Spring Core & Maven (Module 5)",
                        links: [
                            { name: "Spring Framework Reference", url: "https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/overview.html" },
                            { name: "Spring Maven Project Creation", url: "https://www.studytonight.com/spring-framework/spring-maven-project" },
                            { name: "IoC and DI Concepts", url: "https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring" },
                            { name: "Spring Bean Annotations", url: "https://www.baeldung.com/spring-bean-annotations" },
                            { name: "Dependency Injection Deep Dive", url: "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html" },
                            { name: "Aspect Oriented Programming (AOP)", url: "https://www.geeksforgeeks.org/aspect-oriented-programming-and-aop-in-spring-framework/" },
                            { name: "Spring MVC Framework Introduction", url: "https://www.geeksforgeeks.org/spring-mvc-framework/" },
                            { name: "Spring Boot Introduction", url: "https://www.geeksforgeeks.org/springboot-/" }
                        ]
                    }
                ],
                files: [
                    { name: "Spring Core & Maven", path: "Java FSE/Deepskilling/Spring Core and Maven/Spring Core_Maven.docx" }
                ],
                mandatory: [
                    "Exercise 1: Configuring Basic Spring App",
                    "Exercise 2: Dependency Injection"
                ]
            },
            {
                day: "Days 9-10 (Jun 26-27)",
                title: "Spring Data JPA & Hibernate",
                desc: "Map database relations to Java entities and configure ORM.",
                docs: [
                    {
                        category: "Spring Data JPA & Hibernate (Module 6)",
                        links: [
                            { name: "Persistence Layer with JPA", url: "https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa" },
                            { name: "JPA in Spring Boot Guide", url: "https://www.javaguides.net/2021/12/how-to-use-spring-data-jpa-in-spring-boot-project.html" },
                            { name: "Object Relational Mapping (ORM)", url: "https://salithachathuranga94.medium.com/object-relational-mapping-with-spring-boot-jpa-and-hibernate-18cdfc51b4f0" },
                            { name: "Spring Data Repositories", url: "https://docs.spring.io/spring-data/data-commons/docs/1.6.1.RELEASE/reference/html/repositories.html" },
                            { name: "Spring Boot JPA CRUD Example", url: "https://medium.com/javarevisited/spring-boot-jpa-crud-with-example-bbd219b5d4a6" },
                            { name: "JPA Query Methods Reference", url: "https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html" },
                            { name: "JPA Pagination & Sorting", url: "https://www.baeldung.com/spring-data-jpa-pagination-sorting" },
                            { name: "JPA Auditing Documentation", url: "https://docs.spring.io/spring-data/jpa/reference/auditing.html" },
                            { name: "JPA Projections Guide", url: "https://docs.spring.io/spring-data/jpa/reference/repositories/projections.html" },
                            { name: "Spring Boot Spring Data JPA", url: "https://www.geeksforgeeks.org/spring-boot-spring-data-jpa/" },
                            { name: "JPA vs Hibernate vs Spring Data JPA", url: "https://medium.com/@burakkocakeu/jpa-hibernate-and-spring-data-jpa-efa71feb82ac" }
                        ]
                    }
                ],
                files: [
                    { name: "JPA Hands-on 1", path: "Java FSE/Deepskilling/Spring Data JPA with Hibernate/1. spring-data-jpa-handson.docx" },
                    { name: "JPA Hands-on 2", path: "Java FSE/Deepskilling/Spring Data JPA with Hibernate/2. spring-data-jpa-handson_2.docx" },
                    { name: "JPA Hands-on 3", path: "Java FSE/Deepskilling/Spring Data JPA with Hibernate/3. Spring data jpa handson_3.docx" },
                    { name: "JPA & Hibernate Theory", path: "Java FSE/Deepskilling/Spring Data JPA with Hibernate/Spring Data JPA and Hibernate.docx" }
                ],
                mandatory: [
                    "Spring Data JPA Quick Example",
                    "Difference between JPA, Hibernate and Spring Data JPA"
                ]
            },
            {
                day: "Days 11-13 (Jun 28-30)",
                title: "Spring REST using Spring Boot 3",
                desc: "Expose decoupled endpoints, validate request payloads, and implement security tokens.",
                docs: [
                    {
                        category: "Spring RESTful Web Services (Module 7)",
                        links: [
                            { name: "RESTful Web Services Introduction", url: "https://www.geeksforgeeks.org/spring-boot-introduction-to-restful-web-services/" },
                            { name: "What is New in Spring Boot 3 & Spring 6", url: "https://www.baeldung.com/spring-boot-3-spring-6-new" },
                            { name: "Create REST API with Spring Boot", url: "https://www.geeksforgeeks.org/easiest-way-to-create-rest-api-using-spring-boot/" },
                            { name: "Request Body & Param Validation", url: "https://medium.com/@tericcabrel/validate-request-body-and-parameter-in-spring-boot-53ca77f97fe9" },
                            { name: "Custom Response Headers", url: "https://belowthemalt.com/2023/01/12/how-do-you-add-custom-response-headers-in-a-spring-boot-application/" },
                            { name: "REST API Design Sub- & Nested-Resources", url: "https://www.moesif.com/blog/technical/api-design/REST-API-Design-Best-Practices-for-Sub-and-Nested-Resources/" },
                            { name: "RESTful API CRUD Operations", url: "https://blog.treblle.com/understanding-restful-api-crud-operations/" },
                            { name: "HATEOAS and Why It is Needed", url: "https://www.geeksforgeeks.org/hateoas-and-why-its-needed-in-restful-api/" },
                            { name: "Content Negotiation in Spring Boot", url: "https://maheshbonagiri.medium.com/spring-boot-and-content-negotiation-183b20eaa425" },
                            { name: "Spring Boot Actuator Monitoring", url: "https://www.geeksforgeeks.org/spring-boot-actuator/" },
                            { name: "OAuth2 & JWT REST Protection", url: "https://www.toptal.com/spring/spring-boot-oauth2-jwt-rest-protection" },
                            { name: "Integration Testing REST APIs", url: "https://www.baeldung.com/integration-testing-a-rest-api" },
                            { name: "Swagger Documentation in REST API", url: "https://www.geeksforgeeks.org/spring-boot-rest-api-documentation-using-swagger/" }
                        ]
                    }
                ],
                files: [
                    { name: "REST Hands-on 1", path: "Java FSE/Deepskilling/Spring REST using Spring Boot/1. spring-rest-handson.docx" },
                    { name: "REST Hands-on 2", path: "Java FSE/Deepskilling/Spring REST using Spring Boot/2. spring-rest-handson_2.docx" },
                    { name: "REST Hands-on 3", path: "Java FSE/Deepskilling/Spring REST using Spring Boot/3. spring-rest-handson_3.docx" },
                    { name: "REST Hands-on 4", path: "Java FSE/Deepskilling/Spring REST using Spring Boot/4. spring-rest-handson_4.docx" },
                    { name: "JWT Security Hands-on", path: "Java FSE/Deepskilling/Spring REST using Spring Boot/5. JWT-handson.docx" }
                ],
                mandatory: [
                    "Create Spring Web Project",
                    "JWT Authentication Service"
                ]
            },
            {
                day: "Days 14-17 (Jul 1-4)",
                title: "SonarQube & Microservices",
                desc: "Run code quality analytics, establish service discovery, configurations, and resilient edge routing.",
                docs: [
                    {
                        category: "Code Quality & SonarQube (Module 6)",
                        links: [
                            { name: "SonarQube Setup & Guide", url: "https://www.geeksforgeeks.org/devops/sonarqube/" },
                            { name: "SonarQube in Java Key Tutorial", url: "https://www.upgrad.com/tutorials/software-engineering/software-key-tutorial/sonarqube-in-java/" },
                            { name: "Static Code Analysis with SonarQube", url: "https://www.triology.de/en/blog/static-code-analysis-with-sonarqube" },
                            { name: "Setting up SonarQube for Java Projects", url: "https://medium.com/@anshumaansingh10jan/setting-up-sonarqube-for-code-quality-inspection-on-java-maven-gradle-net-python-go-projects-5782c17dd64f" },
                            { name: "SonarQube Getting Started Video", url: "https://www.theserverside.com/video/SonarQube-tutorial-Get-started-with-continuous-inspection" },
                            { name: "Continuous Inspection with SonarQube", url: "https://swtestacademy.com/sonarqube-tutorial/" },
                            { name: "Cyclomatic Complexity definition", url: "https://www.sonarsource.com/resources/library/cyclomatic-complexity/" },
                            { name: "SonarQube Code Metrics", url: "https://docs.sonarsource.com/sonarqube-server/user-guide/code-metrics/metrics-definition" }
                        ]
                    },
                    {
                        category: "Microservices & Spring Cloud (Module 8)",
                        links: [
                            { name: "Microservices Architecture Overview", url: "https://www.geeksforgeeks.org/microservices/" },
                            { name: "Inter-Service Communication", url: "https://www.geeksforgeeks.org/inter-service-communication-in-microservices/" },
                            { name: "CQRS Pattern in Microservices", url: "https://www.geeksforgeeks.org/cqrs-design-pattern-in-microservices/" },
                            { name: "Auth & Security in Microservices", url: "https://www.geeksforgeeks.org/authentication-and-authorization-in-microservices/" },
                            { name: "What is Spring Cloud", url: "https://www.geeksforgeeks.org/what-is-spring-cloud/" },
                            { name: "Spring Cloud Core Components", url: "https://howtodoinjava.com/spring-cloud/spring-cloud-components/" },
                            { name: "Spring Cloud Config Server", url: "https://www.geeksforgeeks.org/managing-configuration-for-microservices-with-spring-cloud-config/" },
                            { name: "Netflix Eureka Service Discovery", url: "https://www.geeksforgeeks.org/spring-cloud-how-to-register-microservices-using-netflix-eureka/" },
                            { name: "Spring Security Framework", url: "https://www.geeksforgeeks.org/spring-security-tutorial/" },
                            { name: "Secure Microservices best practices", url: "https://www.geeksforgeeks.org/best-practices-to-secure-microservices-with-spring-security/" },
                            { name: "Centralized OAuth Authentication", url: "https://studentofjava.blog/centralized-authentication-with-spring-security-oauth/" },
                            { name: "OAuth 2.0 Auth Workflow", url: "https://www.geeksforgeeks.org/workflow-of-oauth-2-0/" },
                            { name: "JSON Web Token (JWT) Basics", url: "https://www.geeksforgeeks.org/json-web-token-jwt/" },
                            { name: "JWT Tutorial for Beginners", url: "https://examples.javacodegeeks.com/java-development/enterprise-java/jwt-tutorial-for-beginners/" },
                            { name: "SSO in Microservices", url: "https://www.geeksforgeeks.org/single-sign-on-in-microservice-architecture/" },
                            { name: "Feign Client Declarative REST", url: "https://www.geeksforgeeks.org/what-is-feign-client-in-microservices/" },
                            { name: "Orchestration vs Choreography Sagas", url: "https://www.geeksforgeeks.org/orchestration-vs-choreography/" },
                            { name: "API Gateway Patterns", url: "https://www.geeksforgeeks.org/api-gateway-patterns-in-microservices/" },
                            { name: "Spring Cloud Gateway Routing", url: "https://www.geeksforgeeks.org/spring-cloud-gateway/" },
                            { name: "Zuul vs Spring Cloud Gateway Edge", url: "https://rathoreaparna678.medium.com/api-gateway-and-edge-services-zuul-spring-cloud-gateway-dc7567e9bc94" },
                            { name: "Edge Pattern in Microservices", url: "https://www.geeksforgeeks.org/edge-pattern-in-microservices/" },
                            { name: "Edge Routing Techniques", url: "https://umatechnology.org/edge-routing-techniques-for-stateless-microservices-supported-by-modern-rum-tools/" },
                            { name: "Microservices Resilience Patterns", url: "https://www.geeksforgeeks.org/microservices-resilience-patterns/" },
                            { name: "Load Balancing in Microservices", url: "https://www.geeksforgeeks.org/load-balancing-in-spring-boot-microservices/" },
                            { name: "Fault Tolerance with Hystrix", url: "https://www.tpointtech.com/fault-tolerance-with-hystrix" },
                            { name: "Hystrix Circuit Breaker implementation", url: "https://www.geeksforgeeks.org/implementing-a-basic-circuit-breaker-with-hystrix-in-spring-boot-microservices/" },
                            { name: "Retry and Fallback Mechanisms", url: "https://medium.com/@AlexanderObregon/spring-microservices-resilience-with-retry-and-fallback-mechanisms-8500208fc463" },
                            { name: "Resilient Microservices Design principles", url: "https://www.geeksforgeeks.org/resilient-microservices-design/" },
                            { name: "Externalized Configuration Server", url: "https://www.netistech.com/2023/10/microservice-externalized-configuration-config-server.html" },
                            { name: "Dynamic Configuration Updates", url: "https://www.geeksforgeeks.org/dynamic-configuration-updates-with-spring-cloud-config/" },
                            { name: "Application Properties & Profiles", url: "https://www.geeksforgeeks.org/spring-boot-managing-application-properties-with-profiles/" },
                            { name: "Monitoring and Observability basics", url: "https://www.techtarget.com/searchapparchitecture/tip/The-basics-of-monitoring-and-observability-in-microservices" },
                            { name: "Spring Boot Actuators Guide", url: "https://www.baeldung.com/spring-boot-actuators" },
                            { name: "Prometheus Monitoring System", url: "https://www.geeksforgeeks.org/prometheus-monitoring/" },
                            { name: "What is Grafana Dashboard", url: "https://www.geeksforgeeks.org/what-is-grafana/" },
                            { name: "Load Balancing and Observability", url: "https://www.geeksforgeeks.org/efficient-load-balancing-and-metrics-monitoring-in-spring-cloud-microservices/" }
                        ]
                    }
                ],
                files: [
                    { name: "Microservices Workspace Structure", path: "Java FSE/Deepskilling/Microservices/0. Sample Microservices workspace structure.docx" },
                    { name: "Microservices Workspace Structure v2", path: "Java FSE/Deepskilling/Microservices/0. Sample Microservices workspace structure_v2.docx" },
                    { name: "Microservices Setup Exercises", path: "Java FSE/Deepskilling/Microservices/1. Microservices using Spring Boot 3 exercises.pdf" },
                    { name: "API Gateway Exercises", path: "Java FSE/Deepskilling/Microservices/2. Microservices with API gateway.pdf" },
                    { name: "Config Client & Gateway Exercises", path: "Java FSE/Deepskilling/Microservices/3. Microservices config client and gateway exercises.pdf" }
                ],
                mandatory: [
                    "Execute SonarQube Clean Code analysis",
                    "Creating Microservices for account"
                ]
            }
        ]
    },
    phase3: {
        title: "Phase 3: React Frontend Engineering",
        duration: "July 5 – July 14 (10 Days)",
        tasks: [
            {
                day: "Days 18-27 (Jul 5-14)",
                title: "React & Debugging",
                desc: "Construct component-driven interfaces. Master Hooks, State, Axios API fetch, and browser DevTools.",
                docs: [
                    {
                        category: "React SPA Framework (Module 9)",
                        links: [
                            { name: "SPA Fundamentals", url: "https://www.geeksforgeeks.org/what-is-single-page-application/" },
                            { name: "React Documentation & Portal", url: "https://www.geeksforgeeks.org/react/" },
                            { name: "ReactJS Introduction", url: "https://www.geeksforgeeks.org/reactjs-introduction/" },
                            { name: "Virtual DOM in React", url: "https://www.geeksforgeeks.org/reactjs-virtual-dom/" },
                            { name: "ReactJS Component Driven UI", url: "https://www.geeksforgeeks.org/reactjs-components/" },
                            { name: "Importing & Exporting Components", url: "https://www.geeksforgeeks.org/reactjs-importing-exporting/" },
                            { name: "ReactJS ES6 Features", url: "https://www.geeksforgeeks.org/reactjs-es6/" },
                            { name: "W3Schools React ES6 Tutorial", url: "https://www.w3schools.com/react/react_es6.asp" },
                            { name: "JSX Intro & Syntax", url: "https://www.geeksforgeeks.org/reactjs-jsx-introduction/" },
                            { name: "Handling Events in React", url: "https://www.geeksforgeeks.org/react-js-events/" },
                            { name: "React Conditional Rendering", url: "https://www.geeksforgeeks.org/reactjs-conditional-rendering/" },
                            { name: "Lists in ReactJS", url: "https://www.geeksforgeeks.org/reactjs-lists/" },
                            { name: "Importance of Keys in React", url: "https://www.geeksforgeeks.org/reactjs-keys/" },
                            { name: "Controlled Forms in React", url: "https://www.geeksforgeeks.org/reactjs-forms/" },
                            { name: "Form Validation & Error Handling", url: "https://codezup.com/react-form-validation-error-handling/" },
                            { name: "Fetch Data from API in React", url: "https://www.geeksforgeeks.org/how-to-fetch-data-from-an-api-in-reactjs/" }
                        ]
                    },
                    {
                        category: "React Application Debugging (Module 10)",
                        links: [
                            { name: "Browser Developer Tools Guide", url: "https://www.geeksforgeeks.org/javascript/browser-developer-tools/" },
                            { name: "Debugging in Javascript", url: "https://www.geeksforgeeks.org/javascript/debugging-in-javascript/" },
                            { name: "Chrome Debugging Tutorial", url: "https://javascript.info/debugging-chrome" },
                            { name: "Debugging Javascript with Chrome DevTools", url: "https://buddy.works/tutorials/debugging-javascript-efficiently-with-chrome-devtools" },
                            { name: "Official React Developer Tools", url: "https://react.dev/learn/react-developer-tools" },
                            { name: "React DevTools Codecademy Tutorial", url: "https://www.codecademy.com/article/react-devtools-tutorial" },
                            { name: "Chrome DevTools Official Documentation", url: "https://developer.chrome.com/docs/devtools/javascript/" },
                            { name: "Chrome Web DevTools guide", url: "https://www.codecademy.com/article/chrome-web-developer-tools" },
                            { name: "Inspect Mode in Chrome DevTools", url: "https://developer.chrome.com/docs/devtools/inspect-mode" },
                            { name: "How to inspect elements in Chrome", url: "https://dogq.io/blog/how-to-inspect-elements-in-chrome/" },
                            { name: "Chrome Javascript Debugger Guide", url: "https://www.debugbear.com/blog/chrome-javascript-debugger" },
                            { name: "React DevTools in Action", url: "https://www.debugbear.com/blog/react-devtools" },
                            { name: "Debugging React Applications", url: "https://www.frontendtechlead.com/learn-devtools/debugging-react" },
                            { name: "React Debugging with Chrome DevTools", url: "https://hookedonui.com/debugging-react-apps-with-chrome-devtools-react-devtools/" },
                            { name: "Debug React with Breakpoints", url: "https://coreui.io/answers/how-to-debug-react-with-breakpoints/" }
                        ]
                    },
                    {
                        category: "Debugging Quizzes (Module 10)",
                        links: [
                            { name: "Error Handling and Debugging Quiz", url: "https://www.geeksforgeeks.org/quizzes/error-handling-and-debugging/" },
                            { name: "Web Browser DevTools Quiz", url: "https://www.toolsrail.com/quiz/web-browsers-developer-tools-quiz.php" },
                            { name: "Mastering Chrome DevTools Quiz", url: "https://wayground.com/admin/quiz/66f797ec1ff0b846272b8a4e/mastering-chrome-dev-tools" }
                        ]
                    }
                ],
                files: [
                    { name: "ReactJS HOL 1", path: "Java FSE/Deepskilling/React/1. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 2", path: "Java FSE/Deepskilling/React/2. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 3", path: "Java FSE/Deepskilling/React/3. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 4", path: "Java FSE/Deepskilling/React/4. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 5", path: "Java FSE/Deepskilling/React/5. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 6", path: "Java FSE/Deepskilling/React/6. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 7", path: "Java FSE/Deepskilling/React/7. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 8", path: "Java FSE/Deepskilling/React/8. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 9", path: "Java FSE/Deepskilling/React/9. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 10", path: "Java FSE/Deepskilling/React/10. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 11", path: "Java FSE/Deepskilling/React/11. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 12", path: "Java FSE/Deepskilling/React/12. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 13", path: "Java FSE/Deepskilling/React/13. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 14", path: "Java FSE/Deepskilling/React/14. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 15", path: "Java FSE/Deepskilling/React/15. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 16", path: "Java FSE/Deepskilling/React/16. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 17", path: "Java FSE/Deepskilling/React/17. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 18", path: "Java FSE/Deepskilling/React/18. ReactJS-HOL.docx" },
                    { name: "ReactJS HOL 19", path: "Java FSE/Deepskilling/React/19. ReactJS-HOL.docx" }
                ],
                mandatory: [
                    "Complete UI Form validation",
                    "Implement Axios API fetch"
                ]
            }
        ]
    },
    phase4: {
        title: "Phase 4: Platforms & AWS",
        duration: "July 15 – July 20 (6 Days)",
        tasks: [
            {
                day: "Days 28-29 (Jul 15-16)",
                title: "Git & Version Control",
                desc: "Master version control, branches, forks, merge strategies, and workflows for Agile teams.",
                docs: [
                    {
                        category: "Version Control with Git (Module 11)",
                        links: [
                            { name: "Git Tutorial", url: "https://www.geeksforgeeks.org/git-tutorial/" },
                            { name: "Version Control Systems", url: "https://www.geeksforgeeks.org/version-control-systems/" },
                            { name: "Git Introduction", url: "https://www.geeksforgeeks.org/git-introduction/" },
                            { name: "What is Git Repository", url: "https://www.geeksforgeeks.org/what-is-a-git-repository/" },
                            { name: "Basic Git Commands", url: "https://www.geeksforgeeks.org/basic-git-commands-with-examples/" },
                            { name: "Essential Git Commands", url: "https://www.geeksforgeeks.org/essential-git-commands/" },
                            { name: "Branching Strategies in Git", url: "https://www.geeksforgeeks.org/branching-strategies-in-git/" },
                            { name: "Git Merge", url: "https://www.geeksforgeeks.org/git-merge/" },
                            { name: "How to Merge Branches", url: "https://www.geeksforgeeks.org/how-to-mergetwo--branches-in-git/" },
                            { name: "Git Forking Guide", url: "https://www.geeksforgeeks.org/git-fork/" },
                            { name: "Git Workflows for Agile Development", url: "https://www.geeksforgeeks.org/git-workflows-for-agile-development-teams/" }
                        ]
                    }
                ],
                files: [
                    { name: "Git HOL 1", path: "Java FSE/Deepskilling/GIT/1. Git-HOL.docx" },
                    { name: "Git HOL 2", path: "Java FSE/Deepskilling/GIT/2. Git-HOL.docx" },
                    { name: "Git HOL 3", path: "Java FSE/Deepskilling/GIT/3. Git-HOL.docx" },
                    { name: "Git HOL 4", path: "Java FSE/Deepskilling/GIT/4. Git-HOL.docx" },
                    { name: "Git HOL 5", path: "Java FSE/Deepskilling/GIT/5. Git-HOL.docx" }
                ],
                mandatory: [
                    "Complete Git-HOL 1 through 5"
                ]
            },
            {
                day: "Days 30-31 (Jul 17-18)",
                title: "AWS Cloud & DevOps",
                desc: "Deploy CI/CD pipelines, containerize with Docker, estimate with Agile Scrum, and grasp AWS Cloud & Generative AI.",
                docs: [
                    {
                        category: "DevOps & CI/CD (Module 12)",
                        links: [
                            { name: "DevOps Tutorial", url: "https://www.geeksforgeeks.org/devops-tutorial/" },
                            { name: "Introduction to DevOps", url: "https://www.geeksforgeeks.org/introduction-to-devops/" },
                            { name: "What is CI/CD Pipeline", url: "https://www.geeksforgeeks.org/what-is-ci-cd/" }
                        ]
                    },
                    {
                        category: "Containerization with Docker (Module 13)",
                        links: [
                            { name: "Docker Tutorial", url: "https://www.geeksforgeeks.org/docker-tutorial/" }
                        ]
                    },
                    {
                        category: "Agile Methodology (Module 14)",
                        links: [
                            { name: "Agile Methodology Overview", url: "https://www.geeksforgeeks.org/software-testing/what-is-agile-methodology/" },
                            { name: "Atlassian Agile Guide", url: "https://www.atlassian.com/agile" },
                            { name: "Agile Software Development", url: "https://www.geeksforgeeks.org/software-engineering/agile-methodology-tutorial/" },
                            { name: "What is Scrum Framework", url: "https://www.geeksforgeeks.org/software-engineering/what-is-scrum/" },
                            { name: "Atlassian Scrum Methodology", url: "https://www.atlassian.com/agile/scrum" },
                            { name: "Scrum and Agile Project Management", url: "https://www.atlassian.com/blog/project-management/beginners-guide-scrum-and-agile-project-management" },
                            { name: "Planning Poker Estimation Technique", url: "https://www.tutorialspoint.com/estimation_techniques/estimation_techniques_planning_poker.htm" },
                            { name: "Agile Planning Poker Guide", url: "https://www.mountaingoatsoftware.com/agile/planning-poker" },
                            { name: "FreeCodeCamp Planning Poker Guide", url: "https://guide.freecodecamp.org/agile/planning-poker" },
                            { name: "User Stories in Agile Dev", url: "https://www.geeksforgeeks.org/software-engineering/user-stories-in-agile-software-development/" },
                            { name: "Atlassian User Stories Guide", url: "https://www.atlassian.com/agile/project-management/user-stories" },
                            { name: "How to Write User Stories", url: "https://www.freecodecamp.org/news/how-to-write-user-stories-for-beginners" },
                            { name: "Acceptance Criteria for Agile Stories", url: "https://www.geeksforgeeks.org/product-management/what-is-acceptance-criteria-how-to-write-it/" }
                        ]
                    },
                    {
                        category: "Cloud Fundamentals (AWS) (Module 15)",
                        links: [
                            { name: "Beginners Guide to AWS", url: "https://www.freecodecamp.org/news/beginners-guide-to-cloud-computing-with-aws/" },
                            { name: "AWS Cloud Tutorial", url: "https://www.geeksforgeeks.org/devops/aws-tutorial/" },
                            { name: "AWS Step by Step Core Concepts", url: "https://awsforengineers.com/blog/aws-tutorial-for-beginners-step-by-step-core-concepts/" },
                            { name: "Amazon EC2 Instance Creation", url: "https://www.geeksforgeeks.org/devops/amazon-ec2-creating-an-elastic-cloud-compute-instance/" },
                            { name: "Amazon Machine Image (AMI)", url: "https://www.geeksforgeeks.org/cloud-computing/what-is-amazon-machine-image-ami/" },
                            { name: "Securing EC2 Instances", url: "https://www.geeksforgeeks.org/devops/securing-ec2-instances-with-security-groups-and-key-pairs/" },
                            { name: "30 Days of AWS Guide", url: "https://www.geeksforgeeks.org/devops/30-days-of-aws/" },
                            { name: "Top AWS Services list", url: "https://www.geeksforgeeks.org/cloud-computing/top-aws-services/" },
                            { name: "Create S3 Bucket", url: "https://www.geeksforgeeks.org/cloud-computing/amazon-s3-creating-a-s3-bucket/" },
                            { name: "AWS S3 Storage Tutorial", url: "https://www.geeksforgeeks.org/devops/introduction-to-aws-simple-storage-service-aws-s3/" },
                            { name: "S3 Storage Classes Reference", url: "https://www.geeksforgeeks.org/devops/amazon-s3-storage-classes/" },
                            { name: "How to Store Data in S3", url: "https://www.geeksforgeeks.org/devops/how-to-store-data-in-a-s3-bucket/" },
                            { name: "Amazon VPC Tutorial", url: "https://www.geeksforgeeks.org/devops/amazon-vpc-introduction-to-amazon-virtual-cloud/" },
                            { name: "VPC Networking Components", url: "https://www.geeksforgeeks.org/devops/amazon-vpc-networking-components/" },
                            { name: "VPC subnets configuration", url: "https://www.geeksforgeeks.org/devops/amazon-vpc-working-with-vpcs-and-subnets/" },
                            { name: "AWS VPC Route Table", url: "https://www.geeksforgeeks.org/cloud-computing/aws-vpc-route-table/" },
                            { name: "RDS Instances in Private Subnet", url: "https://www.geeksforgeeks.org/configuring-rds-instances-in-a-private-subnet/" },
                            { name: "AWS Interview Questions Prep", url: "https://www.geeksforgeeks.org/cloud-computing/aws-interview-questions/" },
                            { name: "AWS Lambda Introduction", url: "https://www.geeksforgeeks.org/devops/introduction-to-aws-lambda/" }
                        ]
                    },
                    {
                        category: "Generative AI Fundamentals (Module 16)",
                        links: [
                            { name: "What is Generative AI", url: "https://www.geeksforgeeks.org/artificial-intelligence/what-is-generative-ai/" },
                            { name: "What is Gen AI Guide", url: "https://www.geeksforgeeks.org/what-is-generative-ai/" },
                            { name: "History of Generative AI", url: "https://businessmanagementblog.com/history-of-generative-ai/" },
                            { name: "AI Prompt Engineering Intro", url: "https://www.geeksforgeeks.org/what-is-an-ai-prompt-engineering/" },
                            { name: "Prompt Engineering Best Practices", url: "https://www.geeksforgeeks.org/blogs/prompt-engineering-best-practices/" },
                            { name: "Prompting Guide", url: "https://www.promptingguide.ai/" },
                            { name: "Zero-shot, One-shot & Few-shot Learning", url: "https://www.codecademy.com/article/prompt-engineering101--understanding-zero-shot-one-shot-and-few-shot" },
                            { name: "Ethical Considerations in Prompting", url: "https://www.tutorialspoint.com/prompt_engineering/prompt_engineering_ethical_considerations.htm" },
                            { name: "GitHub Copilot Guide", url: "https://www.geeksforgeeks.org/git/github-copilot/" },
                            { name: "GitHub Copilot in VS Code Guide", url: "https://www.freecodecamp.org/news/how-to-use-github-copilot-with-visual-studio-code/" },
                            { name: "Copilot Security and Privacy", url: "https://blog.gitguardian.com/github-copilot-security-and-privacy/" },
                            { name: "Responsible Use with Copilot", url: "https://docs.github.com/en/copilot/responsible-use/code-review" }
                        ]
                    },
                    {
                        category: "Gen AI & Copilot Quizzes (Module 16)",
                        links: [
                            { name: "Generative AI GreatLearning Quiz", url: "https://www.mygreatlearning.com/blog/generative-ai-quiz/" },
                            { name: "Prompt Engineering MCQ Quiz", url: "https://aitoolsnote.com/quiz-prompt-engineering-mcq/" },
                            { name: "Prompt Engineering MCQs Guide", url: "https://technicalblog.in/languagewise-mcqs/prompt-engineering-mcqs/" },
                            { name: "GitHub Copilot Practice Test Quiz", url: "https://examsland.com/free-practice-test/github-copilot/" }
                        ]
                    }
                ],
                files: [],
                mandatory: [
                    "Review Docker images",
                    "Understand AWS Cloud"
                ]
            }
        ]
    }
};

let activeTab = 'phase1';

function getExt(fp) { return fp.split('.').pop().toLowerCase(); }
function getFileType(fp) {
    const ext = getExt(fp);
    if (ext === 'pdf') return 'pdf';
    if (['doc', 'docx'].includes(ext)) return 'word';
    if (['xls', 'xlsx', 'csv'].includes(ext)) return 'excel';
    return 'other';
}

function buildFileUri(relPath) {
    const root = getRepoRoot();
    const encoded = relPath.split('/').map(part => encodeURIComponent(part)).join('/');
    return root + '/' + encoded;
}

// Fixed Open Viewer using MS Office URI Schemes correctly
function openViewer(relPath, title) {
    const type = getFileType(relPath);
    const fileUri = buildFileUri(relPath);

    if (type === 'pdf') {
        const panel = document.getElementById('viewer-panel');
        const iframe = document.getElementById('viewer-frame');
        document.getElementById('viewer-title').innerHTML = '<i class="fa-solid fa-file-pdf" style="color:var(--accent-red);margin-right:8px;"></i>' + title;
        panel.classList.add('open');
        iframe.src = fileUri;
    } else if (type === 'word') {
        // Correct URI scheme for word without security warnings if local
        window.location.href = 'ms-word:ofe|u|' + fileUri;
    } else if (type === 'excel') {
        window.location.href = 'ms-excel:ofe|u|' + fileUri;
    } else {
        window.open(fileUri, '_blank');
    }
}

function openHandbook() {
    openViewer('deepskill-artifact-tracker/DN5.0-Deepskilling-Handbook-Java-FSE-React.pdf', 'Main Handbook');
}

function openExcelTracker() {
    const fileUri = buildFileUri('deepskill-artifact-tracker/DN - Java FSE Mandatory hands-on detail.xlsx');
    window.location.href = 'ms-excel:ofe|u|' + fileUri;
}

function closeViewer() {
    document.getElementById('viewer-panel').classList.remove('open');
    document.getElementById('viewer-frame').src = '';
}

function switchTab(tabId) {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + tabId).classList.add('active');
    activeTab = tabId;
    renderContent();
    updateProgress();
}

function toggleTask(cardId, el) {
    const card = document.getElementById(cardId);
    const node = document.getElementById('node-' + cardId);
    if (el.checked) {
        if (card) card.classList.add('done');
        if (node) node.classList.add('done');
        localStorage.setItem(cardId, 'done');
    } else {
        if (card) card.classList.remove('done');
        if (node) node.classList.remove('done');
        localStorage.removeItem(cardId);
    }
    updateProgress();
}

function updateProgress() {
    let total = 0, done = 0;
    Object.keys(studyData).forEach(pk => {
        studyData[pk].tasks.forEach((_, i) => {
            total++;
            if (localStorage.getItem(pk + '-task-' + i) === 'done') done++;
        });
    });
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-percent').textContent = pct + '%';
    document.getElementById('stat-completed').textContent = done;
    document.getElementById('stat-remaining').textContent = total - done;
}

function esc(s) { return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }

function renderContent() {
    const container = document.getElementById('bento-content');
    const data = studyData[activeTab];

    let html = `
    <div class="timeline-header">
        <h2>${data.title}</h2>
        <p><i class="fa-regular fa-clock"></i> ${data.duration}</p>
    </div>
    <div class="timeline-container">
    `;

    data.tasks.forEach((task, index) => {
        const cardId = activeTab + '-task-' + index;
        const isDone = localStorage.getItem(cardId) === 'done';
        
        let fileTags = '';
        if (task.files && task.files.length > 0) {
            fileTags = task.files.map(f => {
                const type = getFileType(f.path);
                const icon = type === 'pdf' ? 'fa-file-pdf' : type === 'word' ? 'fa-file-word' : 'fa-file-excel';
                return '<button class="file-tag ' + type + '" onclick="openViewer(\'' + esc(f.path) + '\', \'' + esc(f.name) + '\')"><i class="fa-solid ' + icon + '"></i> ' + f.name + '</button>';
            }).join('');
        } else {
            fileTags = '<span style="font-size:0.8rem;color:var(--text-muted)">No files.</span>';
        }

        let resHtml = '';
        if (task.docs && task.docs.length > 0) {
            let total = task.docs.reduce((sum, g) => sum + g.links.length, 0);
            let groups = task.docs.map(g => {
                let links = g.links.map(l => '<a href="' + l.url + '" target="_blank" class="link-item"><i class="fa-solid fa-arrow-right"></i> ' + l.name + '</a>').join('');
                return '<div><div class="link-group-title">' + g.category + '</div><div class="link-list">' + links + '</div></div>';
            }).join('');
            
            resHtml = '<details class="res-details"><summary class="res-summary"><i class="fa-solid fa-bookmark"></i> Resources <span class="res-count">' + total + '</span></summary><div class="res-body">' + groups + '</div></details>';
        }

        let mandates = task.mandatory.map(m => '<li><i class="fa-solid fa-check"></i> ' + m + '</li>').join('');

        html += `
        <div class="timeline-node ${isDone ? 'done' : ''}" id="node-${cardId}">
            <div class="timeline-marker"></div>
            <div class="timeline-card ${isDone ? 'done' : ''}" id="${cardId}">
                <div class="card-top">
                    <div>
                        <div class="task-day">${task.day}</div>
                        <div class="task-title">${task.title}</div>
                        <div class="task-desc">${task.desc}</div>
                    </div>
                    <label class="done-box">
                        <input type="checkbox" ${isDone ? 'checked' : ''} onchange="toggleTask('${cardId}', this)">
                        <span>Done</span>
                    </label>
                </div>
                
                <div class="card-mid">
                    <div>
                        <div class="section-title"><i class="fa-solid fa-file-code"></i> Hands-on Files</div>
                        <div class="file-tags">${fileTags}</div>
                    </div>
                    ${resHtml}
                </div>
                
                <div class="card-bot">
                    <div class="section-title"><i class="fa-solid fa-bullseye"></i> Mandatory Targets</div>
                    <ul class="mandate-list">${mandates}</ul>
                </div>
            </div>
        </div>
        `;
    });

    html += '</div>'; // close timeline-container
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    updateProgress();
});
