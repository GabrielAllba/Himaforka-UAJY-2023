import React from "react";

interface Posts {
  [index: number]: {
    id: string;
    user_created: string;
    date_created: string;
    date_updated: string;
    title: string;
    thumbnail: string;
    content: string;
  };
}

async function getPosts(): Promise<Posts> {
  const res = await fetch(`${process.env.API_BASE_URL}/items/posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.data;
}

const Umum = async () => {
  const posts = await getPosts();

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center p-2">
        {posts &&
          Object.values(posts).map((post) => (
            <div className="card bg-base-100 shadow-xl lg:card-side" key={post.id}>
              <figure>
                <img alt="Album" src={`${process.env.API_BASE_URL}/assets/${post.thumbnail}`} />
              </figure>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Umum;
