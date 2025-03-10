import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { BlogPost, getBlogPosts } from '../utils/content';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await getBlogPosts();
        const foundPost = posts.find(p => p.slug === slug);
        
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('記事が見つかりませんでした。');
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('記事の読み込み中にエラーが発生しました。');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            {loading ? (
              <p className="text-center">読み込み中...</p>
            ) : error ? (
              <div className="text-center">
                <p className="text-red-500">{error}</p>
                <a href="/blog" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">
                  ブログ一覧に戻る
                </a>
              </div>
            ) : post ? (
              <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-8">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-500 mb-6">{post.date}</p>
                <div className="prose prose-lg max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a href="/blog" className="text-blue-500 hover:text-blue-700">
                    ← ブログ一覧に戻る
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}