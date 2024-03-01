import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import SourceCode from 'dumi/theme-default/builtins/SourceCode';
import { NpmIcon, YarnIcon, PnpmIcon, BunIcon } from './icons';

interface InstallProps {
  npm?: string;
  yarn?: string;
  pnpm?: string;
  bun?: string;
  [key: string]: string | undefined;
}

const npmLabel = (
  <span className="snippet-label">
    <NpmIcon />
    npm
  </span>
);

const yarnLabel = (
  <span className="snippet-label">
    <YarnIcon />
    yarn
  </span>
);

const pnpmLabel = (
  <span className="snippet-label">
    <PnpmIcon />
    pnpm
  </span>
);

const bunLabel = (
  <span className="snippet-label">
    <BunIcon />
    bun
  </span>
);

const InstallDependencies = (props: InstallProps) => {
  const { npm, yarn, pnpm, bun } = props;
  const items = React.useMemo<TabsProps['items']>(
    () =>
      [
        {
          key: 'npm',
          children: npm ? <SourceCode lang="bash">{npm}</SourceCode> : null,
          label: npmLabel
        },
        {
          key: 'yarn',
          children: yarn ? <SourceCode lang="bash">{yarn}</SourceCode> : null,
          label: yarnLabel
        },
        {
          key: 'pnpm',
          children: pnpm ? <SourceCode lang="bash">{pnpm}</SourceCode> : null,
          label: pnpmLabel
        },
        {
          key: 'bun',
          children: bun ? <SourceCode lang="bash">{bun}</SourceCode> : null,
          label: bunLabel
        }
      ].filter((item) => item.children),
    [npm, yarn, pnpm]
  );
  return <Tabs className="antd-site-snippet" defaultActiveKey="npm" items={items} />;
};

export default InstallDependencies;
