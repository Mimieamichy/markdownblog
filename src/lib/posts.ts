import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  id: string;
  title: string;
  date: string;
  description?: string; // Optional description
  // Add any other metadata fields here
}

export interface PostDataWithContent extends PostData {
  contentHtml: string;
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  let fileNames: string[] = [];
   try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (e) {
    // If the directory doesn't exist, return an empty array
    console.warn(`Posts directory not found at ${postsDirectory}`);
    return [];
  }

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md')) // Ensure we only process markdown files
    .map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { title: string; date: string; description?: string }), // Type assertion
    };
  });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    // Ensure dates are valid before comparing
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;

    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds(): { id: string }[] {
   let fileNames: string[] = [];
   try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (e) {
    console.warn(`Posts directory not found at ${postsDirectory}`);
    return [];
  }

  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
    return {
      id: fileName.replace(/\.md$/, ''),
    };
  });
}

export async function getPostData(id: string): Promise<PostDataWithContent> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  let fileContents: string;

  try {
     fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (e) {
    // If the file doesn't exist, throw an error to be caught upstream
    console.error(`Error reading post file: ${fullPath}`, e);
    throw new Error(`Post with id "${id}" not found.`);
  }


  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; description?: string }), // Type assertion
  };
}
