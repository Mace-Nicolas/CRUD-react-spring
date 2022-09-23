# Requirements 
- XAMPP
- MySQL
- ( IntelliJ ? )

## How to start
1) Start XAMPP ( Start Apache and MySQL )
MySQL should be on port 3306
2) Start localhost for react ( 3001 )
3) Start localhost spring ( 8080 )

4) http://localhost/phpmyadmin/ -> create a new DB "aeropicker" or the name in the file src/main/resources/application.properties
````
spring.datasource.url=jdbc:mysql://localhost:3306/yourdatabase
````
5) Change the username and password if needed
6) You might need to have to create a table named "aircraft" in your DB (id, brand, model, imgUrl)
