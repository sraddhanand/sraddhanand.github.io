import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Developer',
    Svg: require('@site/static/img/cs_version_control.svg').default,
    description: (
      <>
        Docker, Terraform, Helm, AWS, Azure, Golang, Python, 
        Jenkins, Github Actions, 
      </>
    ),
  },
  {
    title: 'Security Focused',
    Svg: require('@site/static/img/cs_security_on.svg').default,
    description: (
      <>
        Linux, SAST, DAST, IAM, Network, Ingress, Certs, 
      </>
    ),
  },
  {
    title: 'SRE',
    Svg: require('@site/static/img/cs_server_cluster.svg').default,
    description: (
      <>
        Kubernetes, Istio, OpenTelemetry, Reliability,
        Prometheus, Grafana, Newrelic, 
        SLA, SLO, SLI, 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
