import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';

import articleService from '../services/articleServices';
jest.mock('../services/articleServices');

test("renders zero articles without errors", async () => {
    articleService.mockResolvedValueOnce([])
    render(<View />);
});

test("renders three articles without errors", async ()=> {
    articleService.mockResolvedValueOnce([
        {
            id: 'abc',
            headline: 'test headline',
            createdOn: '2021-08-09T18:02:38-05:00',
            summary: 'test summary',
            body: 'test body',
            author: ''
        },
        {
            id: 'xyz',
            headline: 'test headline',
            createdOn: '2021-08-09T18:02:38-05:00',
            summary: 'test summary',
            body: 'test body',
            author: ''
        },
        {
            id: 'def',
            headline: 'test headline',
            createdOn: '2021-08-09T18:02:38-05:00',
            summary: 'test summary',
            body: 'test body',
            author: ''
        }
    ])
    render(<View />);
    await waitFor(() => { 
        const article = screen.queryAllByTestId('article');
        expect(article).toHaveLength(3);
    })
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.