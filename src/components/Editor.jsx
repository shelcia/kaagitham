import React, { useEffect, useMemo, useState, useRef } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import io from "socket.io-client";

const socket = io("localhost:4000");

const Editor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const id = useRef(`${Date.now()}`);

  useEffect(() => {
    socket.on("sendText", (text) => {
      if (id.current !== text.id) {
        setValue(text.data);
        console.log("all other users");
      }
    });
  }, []);

  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);
  return (
    <React.Fragment>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          socket.emit("text", newValue, id.current);
        }}
      >
        <Editable />
      </Slate>
    </React.Fragment>
  );
};

export default Editor;
