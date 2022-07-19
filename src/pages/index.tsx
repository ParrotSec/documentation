import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/introduction">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container">
          <div className="row">
            <div className="col col--4">
              <div className="card-demo">
                <div className="card">
                  <div className="card__header">
                    <h3>Lorem Ipsum</h3>
                  </div>
                  <div className="card__body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                      suspendisse ultrices gravida.
                    </p>
                  </div>
                  <div className="card__footer">
                    <button className="button button--secondary button--block">See All</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card-demo">
                <div className="card">
                  <div className="card__header">
                    <h3>Lorem Ipsum</h3>
                  </div>
                  <div className="card__body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                      suspendisse ultrices gravida.
                    </p>
                  </div>
                  <div className="card__footer">
                    <button className="button button--secondary button--block">See All</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card-demo">
                <div className="card">
                  <div className="card__header">
                    <h3>Lorem Ipsum</h3>
                  </div>
                  <div className="card__body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                      suspendisse ultrices gravida.
                    </p>
                  </div>
                  <div className="card__footer">
                    <button className="button button--secondary button--block">See All</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
