import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [

    
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/starter',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
   
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Mock Test',
    route: '/mock-test',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Category',
        to: '/mock-test/add-category',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Category List',
        to: "/mock-test/view-category-list",
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Mock Test Questions',
        to: "/mock-test/add-mock-test-question",
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Mock Test Questions List',
        to: "/mock-test/view-mock-test-question-list",
      },
    ]
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'PYQ',
    route: '/pyq',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add PYQ Category',
        to: '/pyq/add-pyq-category',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View PYQ Category List',
        to: "/pyq/view-pyq-category-list",
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add PYQ',
        to: "/pyq/add-pyq",
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View PYQ List',
        to: "/pyq/view-pyq-list",
      },
    ]
  },



  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/users',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'View Users',
        to: '/users/viewUsers',
      }
    ]


  } ,

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Faculty',
    route: '/faculty',
    icon: 'cil-puzzle',
    _children: [
     
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Faculty',
        to: '/faculty/addFaculty',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Faculty List',
        to: '/faculty/viewFacultyList',
      },
    ]


  }  ,
  {
    _tag: 'CSidebarNavDropdown',
    name : 'Testimonial',
    route: '/Testimonial',
    icon: 'cil-puzzle',
    _children: [
     
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Testimonial',
        to: '/Testimonial/addTestimonial',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Testimonial List',
        to: '/Testimonial/viewTestimonialList',
      },
    ]


  } ,


{
    _tag: 'CSidebarNavDropdown',
    name: 'Free Notes',
    route: '/freeNotes',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Free Notes Category',
        to: '/freeNotes/add-freeNotes-category',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Free Notes Category List',
        to: "/freeNotes/view-freeNotes-category-list",
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add PYQ',
        to: "/freeNotes/add-freeNotes",
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Free Notes List',
        to: "/freeNotes/view-freeNotes-list",
      },
    ]
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Enquiry',
    route: '/enquiry',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'View Enquiry',
        to: '/enquiry/viewEnquiry',
      }
    ]


  } ,
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Sugestion',
    route: '/suggestion',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'View Sugestion',
        to: '/suggestion/viewSugestion',
      }
    ]


  } ,
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Setting',
    route: '/setting',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'View Setting',
        to: '/setting/viewSetting',
      }
    ]


  } 


































































//   {
//     _tag: 'CSidebarNavTitle',
//     _children: ['Theme']
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Colors',
//     to: '/theme/colors',
//     icon: 'cil-drop',
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Typography',
//     to: '/theme/typography',
//     icon: 'cil-pencil',
//   },
//   {
//     _tag: 'CSidebarNavTitle',
//     _children: ['Components']
//   },
//   {
//     _tag: 'CSidebarNavDropdown',
//     name: 'Base',
//     route: '/base',
//     icon: 'cil-puzzle',
//     _children: [
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Breadcrumb',
//         to: '/base/breadcrumbs',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Cards',
//         to: '/base/cards',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Carousel',
//         to: '/base/carousels',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Collapse',
//         to: '/base/collapses',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Forms',
//         to: '/base/forms',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Jumbotron',
//         to: '/base/jumbotrons',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'List group',
//         to: '/base/list-groups',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Navs',
//         to: '/base/navs',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Navbars',
//         to: '/base/navbars',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Pagination',
//         to: '/base/paginations',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Popovers',
//         to: '/base/popovers',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Progress',
//         to: '/base/progress-bar',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Switches',
//         to: '/base/switches',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Tables',
//         to: '/base/tables',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Tabs',
//         to: '/base/tabs',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Tooltips',
//         to: '/base/tooltips',
//       },
//     ],
//   },
  
//   {
//     _tag: 'CSidebarNavDropdown',
//     name: 'Buttons',
//     route: '/buttons',
//     icon: 'cil-cursor',
//     _children: [
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Buttons',
//         to: '/buttons/buttons',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Brand buttons',
//         to: '/buttons/brand-buttons',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Buttons groups',
//         to: '/buttons/button-groups',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Dropdowns',
//         to: '/buttons/button-dropdowns',
//       }
//     ],
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Charts',
//     to: '/charts',
//     icon: 'cil-chart-pie'
//   },
//   {
//     _tag: 'CSidebarNavDropdown',
//     name: 'Icons',
//     route: '/icons',
//     icon: 'cil-star',
//     _children: [
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'CoreUI Free',
//         to: '/icons/coreui-icons',
//         badge: {
//           color: 'success',
//           text: 'NEW',
//         },
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'CoreUI Flags',
//         to: '/icons/flags',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'CoreUI Brands',
//         to: '/icons/brands',
//       },
//     ],
//   },
//   {
//     _tag: 'CSidebarNavDropdown',
//     name: 'Notifications',
//     route: '/notifications',
//     icon: 'cil-bell',
//     _children: [
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Alerts',
//         to: '/notifications/alerts',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Badges',
//         to: '/notifications/badges',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Modal',
//         to: '/notifications/modals',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Toaster',
//         to: '/notifications/toaster'
//       }
//     ]
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Widgets',
//     to: '/widgets',
//     icon: 'cil-calculator',
//     badge: {
//       color: 'info',
//       text: 'NEW',
//     },
//   },
//   {
//     _tag: 'CSidebarNavDivider'
//   },
//   {
//     _tag: 'CSidebarNavTitle',
//     _children: ['Extras'],
//   },
//   {
//     _tag: 'CSidebarNavDropdown',
//     name: 'Pages',
//     route: '/pages',
//     icon: 'cil-star',
//     _children: [
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Login',
//         to: '/login',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Register',
//         to: '/register',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Error 404',
//         to: '/404',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Error 500',
//         to: '/500',
//       },
//     ],
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Disabled',
//     icon: 'cil-ban',
//     badge: {
//       color: 'secondary',
//       text: 'NEW',
//     },
//     addLinkClass: 'c-disabled',
//     'disabled': true
//   },
//   {
//     _tag: 'CSidebarNavDivider',
//     className: 'm-2'
//   },
//   {
//     _tag: 'CSidebarNavTitle',
//     _children: ['Labels']
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Label danger',
//     to: '',
//     icon: {
//       name: 'cil-star',
//       className: 'text-danger'
//     },
//     label: true
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Label info',
//     to: '',
//     icon: {
//       name: 'cil-star',
//       className: 'text-info'
//     },
//     label: true
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Label warning',
//     to: '',
//     icon: {
//       name: 'cil-star',
//       className: 'text-warning'
//     },
//     label: true
//   },
//   {
//     _tag: 'CSidebarNavDivider',
//     className: 'm-2'
//   }
]

export default _nav
