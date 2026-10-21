import { describe, expect, it, vi } from 'vitest';
import {  render, screen } from '@testing-library/react';

 const Hello = () => <span className='text-red-400'>Goodby</span>

describe('Shows text', () => {
    it ("show Hello", ()=> {
      render (<Hello/>)
      const hello = screen.queryByTestId("Hello")
      expect(hello).toBeTruthy()
    })
});

