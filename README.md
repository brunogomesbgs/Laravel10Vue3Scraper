# Laravel10Vue3Scraper
Web Scraper storing links
In this test, it was used:
- PHP in the version 8.3
- Laravel in the version 10
- Vue 3
- MySQL 8
- Docker Compose
To setup the containerized environment, after the project got clone navigate to the folder back and inside apply the command docker compose up –build, after enter in the database container (mysql:latest) and enter on the database using the root password bruno(mysql -u root -p) them change the database so mysql_local and create an user named laravel(CREATE USER laravel@mysql_local IDENTIFIED BY 'password';) and give it the grants(GRANT ALL PRIVILEGES ON mysql_local.* TO 'laravel'@'mysql_local' WITH GRANT OPTION;) them exit this container. Now enter in the application´s container named laravel_vue which inside needs to be created the tables and seeders by using the commands php artisan migrate and php artisan db:seed DatabaseSeeder. After all that, you can navigate on the application by accessing on it by the browser within the address http://localhost. Enjoy!
