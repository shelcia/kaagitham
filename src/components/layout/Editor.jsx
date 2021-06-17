import React from // useEffect,
// useMemo,
// useState,
// useRef,
// useCallback,
"react";
// import { createEditor } from "slate";
// import { Slate, Editable, withReact } from "slate-react";
// import io from "socket.io-client";
// import isHotkey from "is-hotkey";
// import { Toolbar, MarkButton, BlockButton, toggleMark } from "./Component";

// const HOTKEYS = {
//   "mod+b": "bold",
//   "mod+i": "italic",
//   "mod+u": "underline",
//   "mod+`": "code",
// };

// const socket = io("localhost:4000");

const Editor = ({ match }) => {
  // const editor = useMemo(() => withReact(createEditor()), []);
  // const id = useRef(match.params.id);
  // const renderElement = useCallback((props) => <Element {...props} />, []);
  // const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  // const [value, setValue] = useState([
  //   {
  //     type: "paragraph",
  //     children: [{ text: "A line of text in a paragraph." }],
  //   },
  // ]);

  // useEffect(() => {
  //   socket.once("initial", (initial) => {
  //     setValue(initial);
  //     console.log(initial);
  //     console.log("i ran");
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log(`sending Text ${id.current}`);
  //   socket.on("sendText", (text) => {
  //     if (id.current !== text.id) {
  //       setValue(text.data);
  //       console.log("all other users");
  //     }
  //   });
  //   return () => {
  //     socket.off("sendText");
  //   };
  // }, [value]);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top">
        <a className="navbar-brand" href="/">
          Freee Docs
        </a>
      </nav>
      <div className="container" style={{ marginTop: "12vh" }}>
        {/* <Slate
          editor={editor}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            socket.emit("text", newValue, id.current);
          }}
        >
          <Toolbar>
            <MarkButton format="bold" icon="format_bold" />
            <MarkButton format="italic" icon="format_italic" />
            <MarkButton format="underline" icon="format_underlined" />
            <MarkButton format="code" icon="code" />
            <BlockButton format="heading-one" icon="looks_one" />
            <BlockButton format="heading-two" icon="looks_two" />
            <BlockButton format="block-quote" icon="format_quote" />
            <BlockButton format="numbered-list" icon="format_list_numbered" />
            <BlockButton format="bulleted-list" icon="format_list_bulleted" />
          </Toolbar>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text…"
            spellCheck
            autoFocus
            onKeyDown={(event) => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event)) {
                  event.preventDefault();
                  const mark = HOTKEYS[hotkey];
                  toggleMark(editor, mark);
                }
              }
            }}
          />
        </Slate> */}
      </div>
    </React.Fragment>
  );
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

export default Editor;
