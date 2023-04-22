import { CollectionConfig } from 'payload/types';

const Leads: CollectionConfig = {
  slug: "lead",
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true

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
      required: true
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
    },
    {
      name: "message",
      label: "Message",
      type: "text",
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      "options": [
        {
          label: "New",
          "value": "new"
        },
        {
          label: "Contacted",
          "value": "contacted"
        },
        {
          label: "Qualified",
          "value": "qualified"
        },
        {
          label: "Lost",
          "value": "lost"
        },
        {
          label: "Closed",
          "value": "closed"
        }
      ],
      required: true,
      "defaultValue": "new"
    }
  ]
}
export default Leads;
