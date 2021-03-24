# map-ip-app

Application to search for locations by IP address. The application uses the API (https://ipstack.com/). The app will write in React.

Link to appliaction: https://tomekczernek.github.io/map-ip-app/  

# Important!

Since hosting plans such as Heroku or Github Pages block the connection to the API via HTTP, the application connects to the API via https://cors-anywhere.herokuapp.com/
For this reason, the user's IP is the IP of this website instead of the local IP of user.
