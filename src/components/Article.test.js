import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render } from 'react-dom';

test('renders component without errors', ()=> {
    render(<Article />)
});

const testArticle = {
    id: 'abc',
    headline: 'test headline',
    createdOn: '2021-08-09T18:02:38-05:00',
    summary: 'test summary',
    body: 'test body',
    author: 'test author'
}

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle} />);
    
    const headline = screen.queryByText(/test headline/i);
    const author = screen.queryByText(/test author/i);
    const summary = screen.queryByText(/test summary/i);
    const body = screen.queryByText(/test body/i);

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
});

const testArticle2 = {
    id: 'abc',
    headline: 'test headline',
    createdOn: '2021-08-09T18:02:38-05:00',
    summary: 'test summary',
    body: 'test body',
    author: ''
}

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticle2} />);

    const associatedPress = screen.queryByText(/associated press/i);

    expect(associatedPress).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDeleteMock = jest.fn();
    render(<Article handleDelete={handleDeleteMock} article={testArticle} />);

    const button = screen.getByTestId('deleteButton');
    userEvent.click(button);

    expect(handleDeleteMock).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.