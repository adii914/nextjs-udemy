const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// 一覧取得
export const  getAllPostData = async () => {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
};

// id値のみ取得
export const getAllPostIds = async () => {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id)
      }
    }
  });
};

// 詳細データ取得
export const getPostData = async (id) => {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();

  return {
    post
  }
};