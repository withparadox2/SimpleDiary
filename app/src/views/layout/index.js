import React from 'react';
import Header from './Header/Header';
import DiaryList from '../diary/DiaryList'

export default function Layout() {
    return (
        <div>
            <Header/>
            <DiaryList/>
        </div>
    )
}
