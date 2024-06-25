import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

const FeatureList = [
  {
    col_string: 'col col--4',
    url: '/docs/category/tp-1',
    title: 'NodeJS',
    img_path: '/img/nodejs_feature.png',
    description: (
      <>
        Contient des TP NodeJS/Express uniquement cotés Back-End
      </>
    ),
  },
  {
    col_string: 'col col--4',
    url: '/docs/category/tp-twitter',
    title: 'Flutter',
    img_path: '/img/flutter_feature.png',
    description: (
      <>
        Contient des TP Flutters, spécifiquement accès sur une page de connexion avec JWT et appel web service  pour alimenter des ListView
      </>
    ),
  },
];

function Feature({ col_string, url, title, img_path, description }) {
  return (
    <div className={col_string}>
      <div className="ss-card ss-card-2 ">
        <Link
          className={"ss-post-link"}
          to={url}>

          <div className="ss-img">
            <p><img className="lazyloaded" src={useBaseUrl(img_path)} /></p>
          </div>
          <div className="ss-subject">
            <div className="ss-text">{title}</div>
          </div>
          <div className="ss-info">
            <div className="content">
              <div className="ss-description">
                {description}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
