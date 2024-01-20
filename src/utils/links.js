import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    text: 'stats',
    path: '/',
    icons: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'all jobs',
    path: 'all-jobs',
    icons: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'add jobs',
    path: 'add-jobs',
    icons: <FaWpforms />,
  },
  {
    id: 4,
    text: 'profile ',
    path: 'profile',
    icons: <ImProfile />,
  },
];

export default links;
