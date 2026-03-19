import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onAdd({ title, content });
            setTitle("");
            setContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
