import { FaBeer } from 'react-icons/fa';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { MdFeedback } from 'react-icons/md';
import { AiOutlineLayout } from 'react-icons/ai';
import { AiOutlineImport } from 'react-icons/ai';

export const menuItems = [
    {
        title: 'Home',
        href: '/',
        icon: <FaBeer/>,
    },
    {
        title: 'Library',
        href: '/library',
        icon: <MdOutlineLibraryBooks/>,
    },
    {
        title: 'Feedback',
        href: '/feedback',
        icon: <MdFeedback/>,
    },
    {
        title: 'Theme Builder',
        href: '/theme-builder',
        icon: <AiOutlineLayout/>,
    },
    {
        title: 'Import/Export',
        href: '/import-export',
        icon: <AiOutlineImport/>,
    }
];

export default menuItems;
