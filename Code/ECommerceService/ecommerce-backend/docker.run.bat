docker run --rm --env spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce?useSSL=false --name ecommerce-service-container -d -p 8080:8080/tcp shubhanjanweb/ecommerce-service-image:latest