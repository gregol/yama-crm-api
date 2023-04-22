import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
  slug: "client",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      required: true,
      unique: true
    },
    {
      name: "phone",
      label: "Phone",
      type: "text"
    },
    {
      name: "company",
      label: "Company",
      type: "text"
    }
  ]
}
export default Examples;
