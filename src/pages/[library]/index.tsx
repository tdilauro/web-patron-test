import * as React from "react";
import Collection from "components/Collection";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import LayoutPage from "components/LayoutPage";
import withAppProps, { AppProps } from "dataflow/withAppProps";

const LibraryHome: NextPage<AppProps> = ({ library, error }) => {
  const props = { library: library, error: error };
  return (
    <LayoutPage props={props}>
      <Collection title={`${library?.catalogName} Home`} />
    </LayoutPage>
  );
};

export const getStaticProps: GetStaticProps = withAppProps();

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};

export default LibraryHome;
