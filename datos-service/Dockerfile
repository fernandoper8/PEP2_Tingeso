FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} datos-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/datos-service-0.0.1-SNAPSHOT.jar"]