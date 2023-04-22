import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Client from './modules/client/entities/client'
import Leads from './modules/leads/entities/leads';
import Proposal from './modules/proposal/entities/proposal';

const server_url = process.env.SERVER_URL ?? 'http://localhost:3010'

export default buildConfig({
  serverURL: server_url,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Client,
    Leads,
    Proposal
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: ['http://localhost:3000', 'http://127.0.0.1:3000','http://localhost:3010'],
});
