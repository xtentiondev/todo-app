import { TaskProps } from '~/components/Task';

export const COLORS = {
  PRIMARY: '#4355B6',
  SECONDARY: '#FD7246',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY1: '#D4D7D9',
  GRAY2: '#4C5257',
  GRAY3: '#989EA4',
  TAG1: '#B2FFDA',
  TAG2: '#D3FAA3',
  TAG3: '#FFFF8F'
};

export const TASKS: TaskProps[] = [
  {
    id: 1,
    title: 'Call carpenter to fix kitchen pipe',
    highPriority: true,
    tags: [],
    completed: false
  },
  {
    id: 2,
    title: 'Pick Melanie from football game',
    tags: ['home', 'celebration', 'chores'],
    highPriority: false,
    completed: false
  },
  {
    id: 3,
    title: 'Help Andreas with homework',
    highPriority: true,
    tags: [],
    completed: false
  },
  {
    id: 4,
    title: 'Pick Melanie from football game',
    highPriority: true,
    tags: ['home', 'celebration', 'chores'],
    completed: true
  }
];