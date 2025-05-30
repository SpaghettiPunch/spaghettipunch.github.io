import React, { ReactNode } from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Comments(): ReactNode {
  const { colorMode } = useColorMode();
  const { siteConfig } = useDocusaurusContext();

  return (
    <Giscus    
      id={siteConfig.themeConfig.giscus.id || "comments"}
      repo={siteConfig.themeConfig.giscus.repo}
      repoId={siteConfig.themeConfig.giscus.repoId}
      category={siteConfig.themeConfig.giscus.category}
      categoryId={siteConfig.themeConfig.giscus.categoryId}
      mapping={siteConfig.themeConfig.giscus.mapping || "pathname"}
      strict={siteConfig.themeConfig.giscus.strict || "1"}
      reactionsEnabled={siteConfig.themeConfig.giscus.reactionsEnabled || "0"}
      emitMetadata={siteConfig.themeConfig.giscus.emitMetadata || "0"}
      inputPosition={siteConfig.themeConfig.giscus.inputPosition || "bottom"}
      theme={colorMode === "dark" ? siteConfig.themeConfig.giscus.darkTheme : siteConfig.themeConfig.giscus.lightTheme}
      lang={siteConfig.themeConfig.giscus.lang || "en"}
      loading={siteConfig.themeConfig.giscus.loading || "lazy"}
    />
  );
}