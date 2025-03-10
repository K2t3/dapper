/**
 * コンテンツを読み込むためのユーティリティ関数
 */

// ニュースアイテムの型定義
export interface NewsItem {
  date: string;
  title: string;
  content: string;
  image?: string;
  published?: boolean;
}

// ギャラリーアイテムの型定義
export interface GalleryItem {
  title: string;
  url: string;
  alt: string;
  published?: boolean;
}

// ブログ記事の型定義
export interface BlogPost {
  title: string;
  date: string;
  content: string;
  slug: string;
  published?: boolean;
}

/**
 * ニュースアイテムを取得する関数
 * 本番環境では、ビルド時に生成されたJSONファイルを読み込む
 * 開発環境では、ハードコードされたデータを返す
 */
export async function getNewsItems(): Promise<NewsItem[]> {
  // 本番環境では、ビルド時に生成されたJSONファイルを読み込む
  if (import.meta.env.PROD) {
    try {
      const response = await fetch('/admin/content/news.json');
      if (!response.ok) {
        throw new Error('Failed to fetch news data');
      }
      const data = await response.json();
      return data.filter((item: NewsItem) => item.published !== false);
    } catch (error) {
      console.error('Error fetching news data:', error);
      return getDefaultNewsItems();
    }
  }
  
  // 開発環境では、ハードコードされたデータを返す
  return getDefaultNewsItems();
}

/**
 * ギャラリーアイテムを取得する関数
 * 本番環境では、ビルド時に生成されたJSONファイルを読み込む
 * 開発環境では、ハードコードされたデータを返す
 */
export async function getGalleryItems(): Promise<GalleryItem[]> {
  // 本番環境では、ビルド時に生成されたJSONファイルを読み込む
  if (import.meta.env.PROD) {
    try {
      const response = await fetch('/admin/content/gallery.json');
      if (!response.ok) {
        throw new Error('Failed to fetch gallery data');
      }
      const data = await response.json();
      return data.filter((item: GalleryItem) => item.published !== false);
    } catch (error) {
      console.error('Error fetching gallery data:', error);
      return getDefaultGalleryItems();
    }
  }
  
  // 開発環境では、ハードコードされたデータを返す
  return getDefaultGalleryItems();
}

/**
 * デフォルトのニュースアイテムを返す関数
 */
function getDefaultNewsItems(): NewsItem[] {
  return [
    {
      date: '2024年3月15日',
      title: '春期講習のお知らせ',
      content: '4月からの新学期に向けて、春期講習を開催します。早期申込割引実施中！',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
    },
    {
      date: '2024年3月1日',
      title: '新コース開講のお知らせ',
      content: 'ビジネス英語コースを新設。4月より開講予定です。',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
    },
    {
      date: '2024年2月15日',
      title: 'オンラインレッスン開始',
      content: 'ご自宅からでも受講可能なオンラインレッスンをスタートしました。',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800'
    }
  ];
}

/**
 * デフォルトのギャラリーアイテムを返す関数
 */
function getDefaultGalleryItems(): GalleryItem[] {
  return [
    {
      title: '教室での授業風景',
      url: '/teachers.jpg',
      alt: '教室での授業風景'
    },
    {
      title: 'グループ学習の様子',
      url: '/teachers.jpg',
      alt: 'グループ学習の様子'
    },
    {
      title: '個別指導の様子',
      url: '/teachers.jpg',
      alt: '個別指導の様子'
    }
  ];
}

/**
 * ブログ記事を取得する関数
 * 本番環境では、ビルド時に生成されたJSONファイルを読み込む
 * 開発環境では、ハードコードされたデータを返す
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  // 本番環境では、ビルド時に生成されたJSONファイルを読み込む
  if (import.meta.env.PROD) {
    try {
      const response = await fetch('/admin/content/blog.json');
      if (!response.ok) {
        throw new Error('Failed to fetch blog data');
      }
      const data = await response.json();
      return data.filter((item: BlogPost) => item.published !== false);
    } catch (error) {
      console.error('Error fetching blog data:', error);
      return getDefaultBlogPosts();
    }
  }
  
  // 開発環境では、ハードコードされたデータを返す
  return getDefaultBlogPosts();
}

/**
 * デフォルトのブログ記事を返す関数
 */
function getDefaultBlogPosts(): BlogPost[] {
  return [
    {
      title: 'はじめてのブログ投稿',
      date: '2025年3月10日',
      content: 'これは「エリザベス外国語研究所」のブログ最初の投稿です。このブログでは、英語学習のコツや、語学に関する豆知識、留学情報など、様々な話題について投稿していきます。\n\n## 英語学習のコツ\n\n英語を効果的に学ぶためには、継続的な学習が大切です。毎日少しずつでも英語に触れる時間を作りましょう。\n\n## 今後の予定\n\n今後は以下のようなトピックについて投稿していく予定です：\n\n- 英単語を効率的に覚えるコツ\n- リスニング力を向上させる方法\n- 英検対策のポイント\n- 海外留学体験談\n\nどうぞお楽しみに！',
      slug: 'first-blog-post'
    }
  ];
}