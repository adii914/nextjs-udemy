import Link from "next/link";
import { Layout } from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export const getStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false     //不正なid値へのアクセス:404エラー
  }
};

export const getStaticProps = async ({params}) => {
  const { post: post } = await getPostData(params.id);
  return {
    props: { post }
  }
};

export default function Post ({post}) {
  if(!post) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">
        {post.title}
      </p>
      <p className="px-10">
        {post.body}
      </p>
      <Link href="/blogPage">
        <div className="flex cursor-pointer mt-12">
          <svg className="mr-3 w-6 h-6" dataSlot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"></path>
          </svg>
          <span>Back to blogPage</span>
        </div>
      </Link>
    </Layout>
  );
};