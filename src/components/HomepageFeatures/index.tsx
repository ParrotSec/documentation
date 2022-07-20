import React, { ElementType } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    id: 1,
    title: 'Easy to Use',
    Svg: require('@site/static/img/feature_images/download.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    id: 2,
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/feature_images/config.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    id: 3,
    title: 'Powered by React',
    Svg: require('@site/static/img/feature_images/config.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    id: 4,
    title: 'Easy to Use',
    Svg: require('@site/static/img/feature_images/troubleshooting.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    id: 5,
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/feature_images/getstarted.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    id: 6,
    title: 'Powered by React',
    Svg: require('@site/static/img/feature_images/config.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({id, title, Svg, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg id={id} className={styles.featureSvg} role='img' />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
