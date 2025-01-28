interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

export default async function Home() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await data.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post?.id} className="card bg-base-100  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{post?.title}</h2>
            <p>{post?.body}</p>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
