import { PostForm } from "./components/PostForm/PostForm";
import styles from "./App.module.css";
import { PostList } from "./components/PostList/PostList";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1>Post App</h1>
        <PostForm />
        <PostList />
      </div>
    </div>
  );
}

export default App;
