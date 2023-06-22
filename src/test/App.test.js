import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "../App.js";

describe( 'TEST APP', () => {
    test('Login link works', async () => {
        render(<App />);
        const user = userEvent.setup()
        const loginLink =  screen.getByText(/login/i);
        await user.click(loginLink);
        expect(screen.getByText(/Subscribe to our updates/i)).toBeInTheDocument();
    })
    
    test('Posts link works', async () => {
        render(<App />);
        const user = userEvent.setup()
        const postsLink =  screen.getByText(/posts/i);
        await user.click(postsLink);
        expect(screen.getByText(/View our posts/i)).toBeInTheDocument();
    })

    test('Main link works', async () => {
        render(<App />);
        const user = userEvent.setup()
        const mainLink =  screen.getByText(/main/i);
        await user.click(mainLink);
        expect(screen.getByText(/We have a lot of posts/i)).toBeInTheDocument();
    })
}) 
