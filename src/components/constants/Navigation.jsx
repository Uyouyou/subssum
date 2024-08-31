import { FaChevronDown } from 'react-icons/fa';
import Phone from '../../assets/phone.png';
import Wifi from '../../assets/wifi.png';
import TV from '../../assets/tv.png';
import Thunder from '../../assets/thunder.png';
import Network from '../../assets/network.png';
import List from '../../assets/list.png';
import Headphone from '../../assets/headphone.png';
import Logout from '../../assets/logout.png';
import Dashboard from '../../assets/dashboard.png';

export const Dashboard_Sidebar_Top_Links = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        image: Dashboard,
    },
    {
        key: 'buy airtime',
        label: 'Buy Airtime',
        path: '/buy airtime',
        icon: <FaChevronDown />,
        image: Phone,
    },
    {
        key: 'buy data',
        label: 'Buy Data',
        path: '/buy-data',
        icon: <FaChevronDown />,
        image: Wifi,
    },
    {
        key: 'tv subscription',
        label: 'TV Subscription',
        path: '/tv',
        icon: <FaChevronDown />,
        image: TV,
    },
    {
        key: 'pay electric bill',
        label: 'Pay Electric Bill',
        path: '/pay-electric-bill',
        icon: <FaChevronDown />,
        image: Thunder,
    },
    {
        key: 'airtime to cash',
        label: 'Airtime To Cash',
        path: '/airtime-to-cash',
        image: Network,
    },
    {
        key: 'transaction history',
        label: 'Transaction History',
        path: '/transaction-history',
        image: List,
    },
    {
        key: 'help & support',
        label: 'Help & Support',
        path: '/help-support',
        image: Headphone,
    }
];

export const Dashboard_Sidebar_Bottom_Links = [
    {
        key: 'logout',
        label: 'Logout',
        path: '/logout',
        icon: <FaChevronDown />,
        image: Logout,
    }
];
