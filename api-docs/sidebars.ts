import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Authentication',
      items: [
        'admin/authentication',
        'admin/authentication-login',
        'admin/authentication-logout',
        'admin/authentication-signup',
        'admin/authentication-verify',
        'admin/authentication-account',
        'admin/authentication-password',
        'admin/authentication-sessions',
      ],
    },
    {
      type: 'category',
      label: 'User Management',
      items: [
        'admin/users',
        'admin/users-management',
        'admin/users-operations',
      ],
    },
    {
      type: 'category',
      label: 'Channel Management',
      items: [
        'admin/channels',
        'admin/channels-operations',
        'admin/channels-analytics',
      ],
    },
    {
      type: 'category',
      label: 'Workspace Management',
      items: [
        'admin/workspaces',
        'admin/workspaces-operations',
        'admin/workspaces-analytics',
      ],
    },
    {
      type: 'category',
      label: 'Message Management',
      items: [
        'admin/messages',
        'admin/messages-operations',
        'admin/messages-analytics',
        'admin/messages-moderation',
      ],
    },
    {
      type: 'category',
      label: 'Team Management',
      items: [
        'admin/teams',
        'admin/teams-management',
        'admin/teams-members',
      ],
    },
    {
      type: 'category',
      label: 'Impersonation',
      items: [
        'admin/impersonate',
        'admin/impersonate-users',
        'admin/impersonate-sessions',
        'admin/impersonate-history',
      ],
    },
    {
      type: 'category',
      label: 'General Information',
      items: [
        'admin/general',
        'admin/general-errors',
        'admin/general-rate-limiting',
        'admin/general-notes',
      ],
    },
  ],
};

export default sidebars;
