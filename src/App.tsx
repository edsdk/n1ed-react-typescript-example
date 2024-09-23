import React from 'react';
import {N1ED} from '@edsdk/n1ed-react';
import {Editor} from 'tinymce';
import "./App.css";

class App extends React.Component {

  handleEditorChange(content: string, editor: Editor) {
    console.log('Content was updated:', content);
  };

  render() {
    return <N1ED
        apiKey="N1ED24RR"
        initialValue="<p>N1ED react demo</p>"
        onEditorChange={this.handleEditorChange}

        init={{
          height: 500,
          toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | myCustomToolbarButton',
          setup: (editor: any) => {
            console.log("TinyMCE initialized");
            editor.ui.registry.addButton('myCustomToolbarButton', {
              text: 'My Custom Button',
              onAction: () => window.alert('Custom button clicked!'),
            });
          },
        }}
    />;
  }
}

export default App;