import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Proposal: CollectionConfig = {
  slug: "proposal",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      required: true,
    },
    {
      name: "client",
      type: 'relationship',
      relationTo: 'client',
      required: true,
      hasMany: false,
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      "options": [
        {
          label: "Draft",
          value: "draft"
        },
        {
          label: "Sent",
          value: "sent"
        },
        {
          label: "Accepted",
          value: "accepted"
        },
        {
          label: "Declined",
          value: "declined"
        }
      ],
      required: true,
      defaultValue: "draft"
    }
  ]
}


export default Proposal;