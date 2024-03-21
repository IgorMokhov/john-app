import designingDashboardsImg from '../assets/works/designing-dashboards-img.jpg';
import malayalamTypeImg from '../assets/works/malayalam-type-img.jpg';
import vibrantPortraitsImg from '../assets/works/vibrant-portraits-img.jpg';

export interface Post {
  id: number;
  title: string;
  date: string;
  categories: string;
  content: string;
}

export interface Work {
  id: number;
  title: string;
  date: string;
  categories: string;
  image: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Making a design system from scratch',
    date: '12 Feb 2020',
    categories: 'Design, Pattern',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    id: 2,
    title: 'Creating pixel perfect icons in Figma',
    date: '12 Feb 2020',
    categories: 'Figma, Icon Design',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];

export const works: Work[] = [
  {
    id: 1,
    title: 'Designing Dashboards',
    date: '2020',
    categories: 'Dashboard',
    image: designingDashboardsImg,
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    id: 2,
    title: 'Vibrant Portraits of 2020',
    date: '2018',
    categories: 'Illustration',
    image: vibrantPortraitsImg,
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    id: 3,
    title: '36 Days of Malayalam type',
    date: '2018',
    categories: 'Typography',
    image: malayalamTypeImg,
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];
