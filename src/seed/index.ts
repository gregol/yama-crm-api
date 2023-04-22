import { Payload } from 'payload';

export const seed = async (payload: Payload): Promise<void> => {
    await payload.create({
    collection: 'users',
    data: {
      email: 'gregorioescalona@gmail.com',
      name: 'Gregorio Escalona',
      password: 'test',
      
    },
  })

  // Seed data for Client collection
  const client_1 = await payload.create({
    collection: 'client',
    data:
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '555-1234',
        company: 'Acme Inc.',
      }});

    const client_2 = await payload.create({
        collection: 'client',
        data:{
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '555-5678',
            company: 'XYZ Corp.',
        }
    });

  // Seed data for Lead collection
  await payload.create({
    collection: 'lead',
    data: 
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '555-1234',
        company: 'Acme Inc.',
        message: "I'm interested in your services.",
        status: 'new',
      }});
      
    await payload.create({
        collection: 'lead',
        data:  {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '555-5678',
            company: 'XYZ Corp.',
            message: 'I have a project I’d like to discuss with you.',
            status: 'contacted',
        },
    });

//   // Seed data for Proposal collection
  await payload.create({
    collection: 'proposal',
    data: 
      {
        title: 'Website redesign',
        description: 'Redesign our website to improve user experience and increase conversions.',
        client: client_1.id,
        status: 'draft',
      }});
    await payload.create({
        collection: 'proposal',
        data: {
            title: 'Mobile app development',
            description: 'Develop a mobile app for iOS and Android platforms to showcase our products and services.',
            client: client_2.id,
            status: 'sent',
        },
        
    });
};
