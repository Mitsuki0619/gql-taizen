import React, { useState } from "react";
import styles from "./PostList.module.css";

export const PostList: React.FC = () => {
  const [editPost, setEditPost] = useState<number | undefined>(undefined);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const clearAll = (): void => {
    setEditPost(undefined);
    setTitle("");
    setContent("");
  };

  const handleClickEdit = (id: number, title: string, content: string) => {
    setEditPost(id);
    setTitle(title);
    setContent(content);
  };

  const handleClickDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      // 削除処理
    } else {
      return;
    }
  };

  const handleClickCancel = () => {
    clearAll();
  };

  const handleClickUpdate = async (id: number) => {
    if (confirm("Are you sure you want to update this post?")) {
      // 更新処理
    } else {
      return;
    }
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Post List</h2>
      <ul className={styles.post_list}>
        {/* {posts.map((post) => ( */}
        <li className={styles.post_item}>
          {/* {post.id === editPost ? (
          <>
            <label className={styles.label_text}>
              <dl>
                <dt>Title</dt>
                <dd>
                  <input
                    className={styles.title_input}
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                  />
                </dd>
              </dl>
            </label>
            <label className={styles.label_text}>
              <dl>
                <dt>Content</dt>
                <dd>
                  <textarea
                    className={styles.content_textarea}
                    name="content"
                    value={content}
                    rows={3}
                    onChange={handleChangeContent}
                  ></textarea>
                </dd>
              </dl>
            </label>
          </>
          ) : ( */}
          <>
            <h3 className={styles.post_title}></h3>
            <p className={styles.post_content}></p>
          </>
          {/* )} */}
          <div className={styles.btn_area}>
            {/* {post.id !== editPost ? ( */}
            <>
              <button className={styles.edit_btn}>Edit</button>
              <button className={styles.delete_btn}>Delete</button>
            </>
            {/* ) : (
            <>
              <button className={styles.update_btn}>Update</button>
              <button onClick={handleClickCancel} className={styles.cancel_btn}>
                Cancel
              </button>
            </>
            )} */}
          </div>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
};
