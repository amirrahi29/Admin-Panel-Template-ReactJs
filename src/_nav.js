import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilCursor, cilNotes, cilPuzzle, cilSpeedometer, cilStar } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Stores',
    to: '/store',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Store',
        to: '/store/add_store',
      },
      {
        component: CNavItem,
        name: 'View Store',
        to: '/store/view_store',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Products',
    to: '/products',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Product',
        to: '/products/add_product',
      },
      {
        component: CNavItem,
        name: 'View Product',
        to: '/products/view_product',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Orders',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Orders',
        to: '/orders/all_orders',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Pendings',
        to: '/orders/pending_orders',
      },
      {
        component: CNavItem,
        name: 'Completed',
        to: '/orders/completed_orders',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Payments',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Payments',
        to: '/payments/all_payments',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Pendings',
        to: '/payments/pending_payments',
      },
      {
        component: CNavItem,
        name: 'Completed',
        to: '/payments/completed_payments',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Attributes',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Category',
        to: '/attributes/category',
      },
      {
        component: CNavItem,
        name: 'Sub Category',
        to: '/attributes/sub_category',
      },
      {
        component: CNavItem,
        name: 'Color',
        to: '/attributes/color',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Vehicles',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Vehicles',
        to: '/vehicles/add_vehicles',
      },
      {
        component: CNavItem,
        name: 'View Vehicles',
        to: '/vehicles/view_vehicles',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Members',
  },
  {
    component: CNavGroup,
    name: 'Agents',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Agents',
        to: '/agents/add_agent',
      },
      {
        component: CNavItem,
        name: 'View Agents',
        to: '/agents/view_agents',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Delivery Boys',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Delivery Boys',
        to: '/delivery_boys/add_delivery_boys',
      },
      {
        component: CNavItem,
        name: 'View Delivery Boys',
        to: '/delivery_boys/view_delivery_boys',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Users',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Users',
        to: '/users/add_users',
      },
      {
        component: CNavItem,
        name: 'View Users',
        to: '/users/view_users',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Communications',
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Agents',
        to: '/notifications/agent_notification',
      },
      {
        component: CNavItem,
        name: 'Delivery Boys',
        to: '/notifications/delivery_boy_notification',
      },
      {
        component: CNavItem,
        name: 'Stores',
        to: '/notifications/store_notification',
      },
      {
        component: CNavItem,
        name: 'Users',
        to: '/notifications/user_notification',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'E-mails',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Agents',
        to: '/emails/agent_notification',
      },
      {
        component: CNavItem,
        name: 'Delivery Boys',
        to: '/email/delivery_boy_notification',
      },
      {
        component: CNavItem,
        name: 'Stores',
        to: '/emails/store_notification',
      },
      {
        component: CNavItem,
        name: 'Users',
        to: '/emails/user_notification',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Queries',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'View Queries',
        to: '/queries/view_queries',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reviews',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'View Reviews',
        to: '/reviews/view_reviews',
      },
    ],
  },
]

export default _nav
