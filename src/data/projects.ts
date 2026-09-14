import type { Project } from '@/types/project'

export const PROJECTS: Project[] = [
  {
    slug: 'digitool',
    title: 'Digitool',
    tagline: 'Multi-tenant ERP & business management platform (Norway)',
    summary:
      'A multi-tenant ERP platform serving 150+ tenant organizations with reporting, integrations, and IoT-driven monitoring.',
    timeframe: '2022 – Present',
    category: 'enterprise-saas',
    featured: true,
    stack: ['Vue.js', '.NET Core', 'SQL Server', 'Redis', 'Azure', 'Microsoft Graph'],
    highlights: [
      'Built ERP reporting and analytics modules — Procurement & Inventory, Time Management, Booking & Resource Planning — including breakdown/variance views used to drive operational recommendations.',
      'Built and maintained two-way system integrations (Tripletex, PowerOffice) enabling automated reconciliation and significantly reducing manual reconciliation effort.',
      'Implemented RBAC and audit logging for compliance and security across 150+ tenant organizations.',
      'Optimized SQL Server performance via advanced indexing, Redis caching, and async processing, cutting API response times from 2.5s to 400ms on datasets with 5M+ records.',
      'Integrated IoT sensor and temperature monitoring data into enterprise dashboards, enabling real-time visualization, trend analysis, and operational monitoring for business users.',
    ],
  },
  {
    slug: 'rentasst',
    title: 'Rentasst',
    tagline: 'Rental & sales management platform',
    summary:
      'A unified rental and sales platform with storefront, inventory lifecycle management, and payment/logistics integrations.',
    timeframe: '2024 – Present',
    category: 'ecommerce',
    featured: true,
    stack: ['React.js', 'Laravel', 'PostgreSQL', 'Redis', 'Razorpay', 'Shiprocket'],
    highlights: [
      'Built a customer-facing storefront and unified product catalog with variant management, supporting rental and sales workflows without duplication.',
      'Designed and implemented inventory modules supporting purchase, returns, adjustments, transfers, warehouse operations, asset lifecycle management, and serial-number tracking using PostgreSQL for scalable transaction processing.',
      'Implemented end-to-end rental lifecycle workflows — booking, fulfilment, and returns — integrated with Razorpay payment processing and Shiprocket logistics.',
    ],
  },
  {
    slug: 'syfol',
    title: 'Syfol',
    tagline: 'No-code/low-code ECM platform (SharePoint-based)',
    summary:
      'A configurable no-code/low-code platform enabling organizations to build custom workflows and document management solutions.',
    timeframe: '2020 – 2022',
    category: 'platform',
    featured: false,
    stack: ['React.js', 'Node.js', 'MongoDB', 'Microsoft 365', 'SharePoint'],
    highlights: [
      'Developed a configurable no-code/low-code platform enabling organizations to build custom workflows, reporting modules, and document management solutions without writing code.',
      'Implemented Microsoft 365 sign-in and data-sync flows to onboard users and integrate external workspace data into the platform.',
    ],
  },
]
