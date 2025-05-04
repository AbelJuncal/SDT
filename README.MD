# SD Trainer
### A first approach for a platform to help the coaches of all over the world.

It all started in a bar having a few beers with my coach. He told me that small clubs were trying to find ways to include new technologies in their day to day life and we talked about doing something since I was a computer scientist. The topic was a bit lost but at HackUPC25 I had the opportunity to start working on this idea.

The texts of the application are in Galician as well as the football teams that appear. Since the application is made by an idea I had in relation to the Galician club in which I play, I thought it would be good since it is not a software that needs a lot of texts to represent its functionality.

In this repository we see a more concrete explanation of what I developed in this application and what features can be highlighted.

### Mini-backend usando FastAPI.
A backend was deployed with two very simple endpoints that only read two .csv files containing different data to display in the frontend. 

This data is synthetic and was obtained using the DeepSeek natural language model, with the aim of not using sensitive data from my teammates without their explicit permission.

### Ngrok
To securely expose a local server to the Internet via tunnels, used to communicate the small backend to the frontend.

### Frontend with React-Native
The front end is the biggest part of the application using all (or almost all) original React libraries for the code. In my case, it's the first mobile app I've developed.

### App primary characteristics

- Integration with a Telegram bot to comunicate between coachs and players using broadcast messages.

### How to run it

#### Frontend

Obviouly, you have to get installed node and react-native in order to try to run the application.
Once you have those installed, you can run it by:

`npm install` and then `npx react-native run-android`

The app was not developed nor tested for iPhone devices.

#### Backend

To run the small backed we have a main in a subfolder called SDT_back/SDT_Data and then you have the main.py using ubicorn:

`uvicorn main:app --reload --host 0.0.0.0 --port 8000`

#### Ngrok

To run the ngrok, you must have it installed ant then:

`ngrok http 8000`

and then you have to copy the new link in the files that use the API_URL in the frontend

### Future Work

The clearest way forward would be to look for an automatic way of integrating the data in order to make a platform that is abstracted from the club for which the application is deployed. This would make it a very scalable product with an infinite number of new features to be integrated into the product.

This repository includes code that is half done as it was developed in less than 24 hours in a solo group at HackUPC 2025.


