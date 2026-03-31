import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Authentication',
      items: [
        'admin/authentication',
      ],
    },
    {
      type: 'category',
      label: 'User Management',
      items: [
        'admin/users',
      ],
    },
    {
      type: 'category',
      label: 'Channel Management',
      items: [
        'admin/channels',
      ],
    },
    {
      type: 'category',
      label: 'Workspace Management',
      items: [
        'admin/workspaces',
      ],
    },
    {
      type: 'category',
      label: 'Message Management',
      items: [
        'admin/messages',
      ],
    },
    {
      type: 'category',
      label: 'Team Management',
      items: [
        'admin/teams',
      ],
    },
    {
      type: 'category',
      label: 'Impersonation',
      items: [
        'admin/impersonate',
      ],
    },
    {
      type: 'category',
      label: 'General Information',
      items: [
        'admin/general',
      ],
    },
  ],
};

export default sidebars;
