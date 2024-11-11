export type DatasProps = {
  id: number;
  title: string;
  description: string[];
};

const datas = [
  {
    id: 1,
    title: 'Design',
    description: ['UI UX Design'],
  },
  {
    id: 2,
    title: 'Web Development',
    description: ['React JS', 'TypeScript', 'JavaScript', 'Next JS', 'Node JS', 'Bun', 'Express JS', 'Firebase'],
  },
  {
    id: 3,
    title: 'Mobile Development',
    description: ['Flutter', 'Dart'],
  },
];

export { datas };
