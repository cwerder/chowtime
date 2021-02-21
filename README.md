Basic food ordering application with OAuth

If running in dev environment, make sure you run the MongoDb server is running locally. For me, simply run 'mongod'. This will start a background process running on port 27017.

To run the front-end, back-end, and database server together run "npm run initialize" from the client directory.

Run mongod --dbpath=/Users/cj/data/db when mongodb fails to start.

Run seedfood script if you want to seed the database with food options.

Run ng build --watch to have the client-side project automatically push saved files to dist on reload.