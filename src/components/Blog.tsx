import React from 'react';

interface BlogPost {
  title: string;
  date: string;
  content: string;
  slug: string;
}

interface BlogProps {
  posts: BlogPost[];
}

export function Blog({ posts }: BlogProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">ブログ</h2>
          <p className="text-center text-gray-600">現在、ブログ記事はありません。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">ブログ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <div className="text-gray-600 mb-4">
                  {post.content.length > 150
                    ? `${post.content.substring(0, 150)}...`
                    : post.content}
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  続きを読む →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}