import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/admin/authentication">
            Get Started with Admin API
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Administrative API Documentation for Chat App">
      <HomepageHeader />
      <main>
        <div className="container" style={{padding: '4rem 0', textAlign: 'center'}}>
          <div className="row">
            <div className="col col--4">
              <div className={styles.featureCard}>
                <h3>Secure Authentication</h3>
                <p>Robust admin signup, login, and token-based authentication flows.</p>
              </div>
            </div>
            <div className="col col--4">
              <div className={styles.featureCard}>
                <h3>Platform Management</h3>
                <p>Full control over workspaces, channels, teams, and user data.</p>
              </div>
            </div>
            <div className="col col--4">
              <div className={styles.featureCard}>
                <h3>Real-time Monitoring</h3>
                <p>Monitor messages and impersonate users for troubleshooting.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
