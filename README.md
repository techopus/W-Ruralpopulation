# W-Ruralpopulation
World rural population webapp using react for forntend and flask for backend api

We have server and client side of code and hence run them seperately.

### Download the zip file or git clone the work( git clone git@github.com:techopus/W-Ruralpopulation.git )

# For backend run

1. Go to the 'flask-server' directory and create a virtual environment and activate the environment.
2. pip install -r requirements.txt
3. python3 server.py

# For frontend run

1. Go to 'frontend-dashboard' directory.
2. npm install
3. npm run start

Now, since the server and the client are going to be run on different ports, CORS has to be enabled in the browser to allow their communication. (If an express server had been used, CORS would have been enabled from there).

Can find CORS extensions download link here for different browsers: https://mybrowseraddon.com/access-control-allow-origin.html?v=0.1.6&type=install
