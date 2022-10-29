import { SetStateAction, useEffect, useState } from "react";
import { PostForm } from "./components/PostForm/PostForm";
import styles from "./App.module.css";
import { PostList } from "./components/PostList/PostList";
import axios from "axios";
import { PostType } from "./types/PostType";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const fetchPosts = async () => {
    try {
      await axios
        .get("http://localhost:3000/posts")
        .then((res) => setPosts(res.data));
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1>Post App</h1>
        <PostForm fetchPosts={fetchPosts} />
        <PostList posts={posts} fetchPosts={fetchPosts} />
      </div>
    </div>
  );
}

export default App;
