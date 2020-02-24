import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import Container from '@material-ui/core/Container';
import {Grid} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import './Write.css'

export default class Write extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // set initial content
        selectedDate: new Date()
    }

    componentDidMount() {
        this.isLivinig = true
        setTimeout(this.setEditorContentAsync, 3000)
    }

    componentWillUnmount() {
        this.isLivinig = false
    }

    handleDateChange = (date) => {
        this.setState({selectedDate: date});
    }

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
        })
    }

    setEditorContentAsync = () => {
        this.isLivinig && this.setState({
            editorState: BraftEditor.createEditorState('<p>Hello，<b>World!</b><p>')
        })
    }

    render() {

        const {editorState, selectedDate} = this.state

        return (
            <Grid container justify="center">
                <Grid item xs={12} lg={6} md={8} sm={10} className="edit">
                    <div style={{display:"flex", justifyContent:"spaceBetween"}}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={selectedDate}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}/>
                        </MuiPickersUtilsProvider>
                        <div style={{marginRight:"2em"}}>
                            <IconButton aria-label="delete" size="large" style={{color:"rgba(246,140,116,1)"}}>
                                <DeleteIcon/>
                            </IconButton>
                            <IconButton aria-label="drafts" size="large" style={{color:"rgba(0,0,0,0.5)"}}>
                                <DraftsIcon/>
                            </IconButton>
                            <IconButton aria-label="send" size="large" style={{color:"rgba(0,173,172,1)"}}>
                                <SendIcon/>
                            </IconButton>
                        </div>
                    </div>
                    <Container maxWidth="md">
                        <div className="editor-wrapper">
                            <BraftEditor value={editorState} onChange={this.handleChange}/>
                        </div>
                        {/* <h5>Output</h5>
                        <div className="output-content">{outputHTML}</div> */}
                    </Container>
                </Grid>
            </Grid>
        )

    }

}