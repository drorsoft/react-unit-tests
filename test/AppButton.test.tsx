import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { beforeEach, describe, expect, test, vi, Mock, afterAll } from 'vitest';
import { checkDomainData } from '../src/api/checkDomainData.ts';
import App from '../src/App';
import { after, afterEach } from 'node:test';


vi.mock('../src/api/checkDomainData.ts'); 
 
 
describe('Application', () => {
    afterEach (()=> {
      

    })
    afterAll(()=> {
      
    })
    beforeEach(() => {
        (checkDomainData as Mock).mockClear();
    });
 
    test('App', async () => {
      

        (checkDomainData as Mock).mockResolvedValue({
            isMalicious: false,
        });

        render(<App />);

        fireEvent.change(screen.getByPlaceholderText('Enter a URL'), {
            target: { value: 'www.safeurl.com' },
        });
        fireEvent.click(screen.getByText('Check URL'));

        await waitFor(() => {
            expect(screen.getByText('safeurl.com')).not.toBe(null);
            expect(screen.getByText('Is Safe')).not.toBe(null);
        });
    });

});