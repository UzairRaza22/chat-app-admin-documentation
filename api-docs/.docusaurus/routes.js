import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a2d'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3e6'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '591'),
            routes: [
              {
                path: '/docs/admin/authentication',
                component: ComponentCreator('/docs/admin/authentication', 'ffa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin/channels',
                component: ComponentCreator('/docs/admin/channels', '857'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin/general',
                component: ComponentCreator('/docs/admin/general', 'ee2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin/impersonate',
                component: ComponentCreator('/docs/admin/impersonate', 'fc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin/messages',
                component: ComponentCreator('/docs/admin/messages', 'c33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin/teams',
                component: ComponentCreator('/docs/admin/teams', '84b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin/users',
                component: ComponentCreator('/docs/admin/users', 'ddc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin/users-management',
                component: ComponentCreator('/docs/admin/users-management', '0be'),
                exact: true
              },
              {
                path: '/docs/admin/workspaces',
                component: ComponentCreator('/docs/admin/workspaces', '651'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
