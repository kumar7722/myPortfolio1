// components/scrollComponents.js

import dynamic from 'next/dynamic';

export const ScrollLink = dynamic(() => import('react-scroll').then((module) => module.Link), {
  ssr: false,
});

export const ScrollElement = dynamic(() => import('react-scroll').then((module) => module.Element), {
  ssr: false,
});
