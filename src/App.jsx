// Remove styles when pasting if using WebKit
// paste_remove_styles_if_webkit: true,

// // Automatically clean up content when pasting
// paste_auto_cleanup_on_paste: true,

// // Remove styles when pasting
// paste_remove_styles: true,

// // Strip all class attributes when pasting
// paste_strip_class_attributes: "all",

import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./App.css";

export default function App() {
  const editorRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Editor
        // Path to the TinyMCE script
        tinymceScriptSrc="/tinymce/tinymce.min.js"
        // License key for TinyMCE
        licenseKey="gpl"
        // Function to initialize the editor and set the reference
        onInit={(_evt, editor) => (editorRef.current = editor)}
        // Initial content of the editor
        initialValue="<p>This is the initial content of the editor.</p>"
        // Configuration options for the editor
        init={{
          // Set the height of the editor
          height: 700,
          width: "80%",

          // Disable the menubar
          menubar: false,

          // Disable TinyMCE branding
          branding: false,

          // Disable resizing of the editor
          resize: false,

          // Disable the status bar
          statusbar: false,

          // will paste content as plain text
          paste_as_text: true,

          // will disallow pasted images even on drag and drop
          paste_data_images: false,

          // List of plugins to include in the editor
          plugins:
            "advlist autolink lists charmap print preview anchor help searchreplace visualblocks code save insertdatetime media table paste wordcount image preview pagebreak",

          // Toolbar configuration
          toolbar:
            "strikethrough bold italic | alignleft aligncenter alignright alignjustify | image preview pagebreak",
        }}
        // Name attribute for the editor
        name="body"
      />
    </div>
  );
}
