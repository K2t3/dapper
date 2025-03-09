/**
 * ビルド時にコンテンツファイルをJSONに変換するスクリプト
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ディレクトリパス
const contentDir = path.join(__dirname, '../content');
const outputDir = path.join(__dirname, '../public/admin/content');

// 出力ディレクトリが存在しない場合は作成
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

/**
 * マークダウンファイルを読み込んでJSONに変換する関数
 * @param {string} dir - ディレクトリパス
 * @param {string} outputFile - 出力ファイル名
 */
function convertMarkdownToJson(dir, outputFile) {
  const fullDir = path.join(contentDir, dir);
  
  // ディレクトリが存在しない場合は空の配列を出力
  if (!fs.existsSync(fullDir)) {
    fs.writeFileSync(
      path.join(outputDir, outputFile),
      JSON.stringify([])
    );
    return;
  }
  
  // マークダウンファイルを読み込む
  const files = fs.readdirSync(fullDir).filter(file => file.endsWith('.md'));
  
  // ファイルの内容を取得
  const items = files.map(file => {
    const filePath = path.join(fullDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    // ファイル名から日付を抽出（オプション）
    if (!data.date && file.match(/^\d{4}-\d{2}-\d{2}/)) {
      const dateStr = file.match(/^(\d{4}-\d{2}-\d{2})/)[1];
      const [year, month, day] = dateStr.split('-');
      data.date = `${year}年${month}月${day}日`;
    }
    
    return data;
  });
  
  // JSONファイルに書き込む
  fs.writeFileSync(
    path.join(outputDir, outputFile),
    JSON.stringify(items, null, 2)
  );
  
  console.log(`Converted ${items.length} ${dir} items to ${outputFile}`);
}

// ニュースとギャラリーのコンテンツを変換
convertMarkdownToJson('news', 'news.json');
convertMarkdownToJson('gallery', 'gallery.json');

console.log('Content build completed!');