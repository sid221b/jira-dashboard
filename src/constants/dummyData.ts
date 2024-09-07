import {
  TicketsDto,
  TicketSections,
  TicketStatus,
  UserDto,
} from '../types/data'

export const dummyUserData: UserDto[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    bgColor: 'bg-blue-700',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@example.com',
    bgColor: 'bg-yellow-700',
  },
  {
    id: 3,
    name: 'Alice Doe',
    email: 'alice@example.com',
    bgColor: 'bg-red-700',
  },
  {
    id: 4,
    name: 'Bob Doe',
    email: 'bob@example.com',
    bgColor: 'bg-green-700',
  },
  {
    id: 5,
    name: 'Charlie Doe',
    email: 'charlie@example.com',
    bgColor: 'bg-yellow-600',
  },
  {
    id: 6,
    name: 'David Doe',
    email: 'david@example.com',
    bgColor: 'bg-blue-600',
  },
  {
    id: 7,
    name: 'Eve Doe',
    email: 'eve@example.com',
    bgColor: 'bg-stone-600',
  },
]

export const ticketSectionDto: TicketSections = {
  todo: {
    id: 'todo',
    title: 'To Do',
  },
  inProgress: {
    id: 'inProgress',
    title: 'In Progress',
  },
  blocked: {
    id: 'blocked',
    title: 'Blocked',
  },
  done: {
    id: 'done',
    title: 'Done',
  },
}

export const dummyTicketSections: TicketStatus[] = [
  'todo',
  'inProgress',
  'blocked',
  'done',
]

export const dummyTicketsData: TicketsDto = {
  todo: [
    {
      id: 'BRD-1',
      title: 'Do the laundry',
      description: 'Wash the clothes and hang them to dry',
      status: 'todo',
      type: 'task',
      userDto: {
        id: 1,
        name: 'John Doe',
        email: 'jhon@email.com',
        bgColor: 'bg-blue-600',
      },
    },
    {
      id: 'BRD-2',
      title: 'Buy groceries',
      description: 'Buy eggs, milk, bread, and vegetables',
      status: 'todo',
      type: 'task',
      userDto: {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@email.com',
        bgColor: 'bg-yellow-600',
      },
    },
    {
      id: 'BRD-8',
      title: 'Study Node.js',
      description: 'Read the documentation and do some exercises',
      status: 'todo',
      type: 'task',
      userDto: {
        id: 1,
        name: 'John Doe',
        email: 'john@email.com',
        bgColor: 'bg-blue-600',
      },
    },
  ],
  inProgress: [
    {
      id: 'BRD-3',
      title: 'Study React',
      description: 'Read the documentation and do some exercises',
      status: 'inProgress',
      type: 'task',
      userDto: {
        id: 3,
        name: 'Alice Doe',
        email: 'alice@email.com',
        bgColor: 'bg-red-700',
      },
    },
    {
      id: 'BRD-4',
      title: 'Study Vite',
      description: 'Read the documentation and do some exercises',
      status: 'inProgress',
      type: 'task',
      userDto: {
        id: 4,
        name: 'Bob Doe',
        email: 'bob@email.com',
        bgColor: 'bg-green-700',
      },
    },
  ],
  blocked: [
    {
      id: 'BRD-5',
      title: 'Study TypeScript',
      description: 'Read the documentation and do some exercises',
      status: 'blocked',
      type: 'bug',
      userDto: {
        id: 5,
        name: 'Charlie Doe',
        email: 'chaelie@emil.com',
        bgColor: 'bg-yellow-700',
      },
    },
  ],
  done: [
    {
      id: 'BRD-6',
      title: 'Study JavaScript',
      description: 'Read the documentation and do some exercises',
      status: 'done',
      type: 'story',
      userDto: {
        id: 6,
        name: 'David Doe',
        email: 'david@email.com',
        bgColor: 'bg-blue-700',
      },
    },
    {
      id: 'BRD-7',
      title: 'Study CSS',
      description: 'Read the documentation and do some exercises',
      status: 'done',
      type: 'bug',
      userDto: {
        id: 7,
        name: 'Eve Doe',
        email: 'eve@email.com',
        bgColor: 'bg-stone-700',
      },
    },
  ],
}
