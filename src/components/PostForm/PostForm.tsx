import React, { useState } from "react";
import styles from "./PostForm.module.css";

export const PostForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleClickAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(title);
    console.log(content);
  };

  return (
    <form className={styles.form}>
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
              rows={5}
              onChange={handleChangeContent}
            ></textarea>
          </dd>
        </dl>
      </label>
      <div className={styles.btn_area}>
        <button className={styles.add_btn} onClick={handleClickAdd}>
          Add
        </button>
      </div>
    </form>
  );
};
