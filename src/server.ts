import express, { Request, Response, NextFunction } from 'express';
import payload from 'payload';
import cors from 'cors';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
require('dotenv').config();
const app = express();
import { seed } from './seed'

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for Marketing campaign and three first steps.
  Marketing campaign name: ${capitalizedAnimal}. Numeral outputs`;
}
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.options('*', cors(corsOptions))
  app.get('/api/graphql', cors(corsOptions), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route'})
  })

app.post('/api/chat', async (req: Request, res: Response, next: NextFunction) => {

    
    try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt('Christmas'),
      temperature: 0.6,
      max_tokens: 2048,
    });
    console.log(completion.data);
    
    res.status(200).json({ result: completion.data.choices[0].text });

  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
  
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  if (process.env.PAYLOAD_SEED === 'true') {
    payload.logger.info('Seeding Payload...')
    await seed(payload)
    payload.logger.info('Done.')
  }


  app.listen(process.env.PORT_APP);
}

start();
