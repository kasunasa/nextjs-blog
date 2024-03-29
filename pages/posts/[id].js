import Layout from '@/components/Layout';
import { getPostData, getPostIds } from '../../lib/post'; // getPostIdsをインポート
import utilstyles from '@/styles/utils.module.css';
import Head from "next/head";

export async function getStaticPaths() {
  const paths = getPostIds(); // getPostIds関数を使用する
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>
          {postData.title}
        </title>
      </Head>
      <article>
        <h1 className={utilstyles.headingx1}>{ postData.utilstyles}</h1>
        <div className={utilstyles.lightText}>{ postData.utilstyles}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }}/>
      </article>
    </Layout>
  );
}
