# Build stage
FROM eclipse-temurin:17-jdk AS build

WORKDIR /app

# Copy Maven wrapper and config
COPY mvnw ./
COPY .mvn .mvn/

# Make sure mvnw is executable
RUN chmod +x mvnw

# Copy project files and download dependencies
COPY pom.xml ./
RUN ./mvnw dependency:go-offline

# Copy source code
COPY src ./src

# Package the application
RUN ./mvnw clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
