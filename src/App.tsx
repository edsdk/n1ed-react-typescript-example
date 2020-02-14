import React from 'react';
import {N1ED} from '@edsdk/n1ed-react';
import {Editor} from '@tinymce/tinymce-react';

class App extends React.Component {

    handleEditorChange(content: string, editor: Editor) {
        console.log('Content was updated:', content);
    };

    render() {
        return <N1ED
            apiKey="REACDFLT"
            initialValue="<p>N1ED react demo</p>"
            onEditorChange={this.handleEditorChange}
        />;
    }
}

export default App;