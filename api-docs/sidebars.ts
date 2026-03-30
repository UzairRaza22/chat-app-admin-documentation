import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Admin API',
      items: [
        'admin/authentication',
        'admin/users',
        'admin/channels',
        'admin/workspaces',
        'admin/messages',
        'admin/teams',
        'admin/impersonate',
        'admin/general',
      ],
    },
  ],
};

export default sidebars;
