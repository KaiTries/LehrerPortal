# Dockerfile/Docker-Compose file based on an initial version authored by Alexander Lontke (ASSE, Fall Semester 2021)

FROM maven:latest as build

COPY . /app

RUN mvn -f app/pom.xml --batch-mode --update-snapshots verify -DskipTests

FROM openjdk:21

COPY --from=build /app/target/LehrerPortal-0.0.1.jar ./LehrerPortal-0.0.1.jar

COPY --from=build /app/src/main/resources/application.properties ./application.properties

CMD java -jar LehrerPortal-0.0.1.jar --spring.config.location=application.properties