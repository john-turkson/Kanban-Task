export const data = [
  {
    taskName: "Create notification email template",
  },

  {
    taskName: 'Redesign "About Us" page',
  },

  {
    taskName: "Redesign Product Logo",
  },

  {
    taskName: "Intergrate Form Validation",
  },

  {
    taskName: "Add new Color schemes to prodcuts page",
  },

  {
    taskName: "Test API for correct Form POST codes",
  },
];

export const Status = ["To Do", "In Progress", "Review", "Completed"];

export const todos = {
  todo: {
    id: "todo",
    title: "To-Do",
    tasks: data
  },

  inProgress: {
    id: "inProgress",
    title: "In Progress",
    tasks: [],
  },

  review: {
    id: "review",
    title: "Review",
    tasks: [],
  },

  complete: {
    id: "complete",
    title: "Completed",
    tasks: [],
  },
};

export const processes = [
    {
      title: "To-Do",
      tasks: [],
    },
  
    {
      title: "In Progress",
      tasks: [],
    },
  
    {
      title: "Review",
      tasks: [],
    },
  
    {
      title: "Completed",
      tasks: [],
    },
  ];