import React from "react";
import styles from "./PostList.module.css"

export const PostList: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Post List</h2>
      <ul className={styles.post_list}>
        <li className={styles.post_item}>
          <h3>タイトルテスト</h3>
          <p>内容テスト内容テスト内容テスト内容テスト</p>
        </li>
        <li className={styles.post_item}>
          <h3>タイトルテスト</h3>
          <p>内容テスト内容テスト内容テスト内容テスト</p>
        </li>
      </ul>
    </div>
  );
};
