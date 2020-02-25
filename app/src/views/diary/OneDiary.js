import React from 'react';
import DiaryContent from './DiaryContent';
import {Paper, Grid} from '@material-ui/core';
import './Diary.css';
import sideGirl from '../../assets/images/sideGirl.png'

export default function OneDiary() {
    return (
        <Grid container className="content"
        >
            <Grid item xs={2} sm={3} md={4} lg={4}>
                <img src={sideGirl} className="sideImage" alt=""/>
            </Grid>
            <Grid item xs={10} sm={9} md={8} lg={8}>
                <div className="sticky"></div>
                <div className="triangle1"></div>
                <div className="triangle2"></div>
                <Paper className="dcontent">
                    <DiaryContent/>
                </Paper>
            </Grid>

        </Grid>
    )
}
