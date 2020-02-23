import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import Container from '@material-ui/core/Container';
import './Write.css'

export default class Write extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // set initial content
        outputHTML: '<p></p>'
    }

    componentDidMount() {
        this.isLivinig = true
        setTimeout(this.setEditorContentAsync, 3000)
    }

    componentWillUnmount() {
        this.isLivinig = false
    }

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        })
    }

    setEditorContentAsync = () => {
        this.isLivinig && this.setState({
            editorState: BraftEditor.createEditorState('<p>Hello，<b>World!</b><p>')
        })
    }

    render() {

        const {editorState, outputHTML} = this.state

        return (

            <Container maxWidth="md" className="edit">
                <div className="editor-wrapper">
                    <BraftEditor value={editorState} onChange={this.handleChange}/>
                </div>
                <h5>Output</h5>
                <div className="output-content">{outputHTML}</div>
            </Container>
        )

    }

}