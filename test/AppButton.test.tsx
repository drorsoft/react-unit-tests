import { describe, expect, it, vi } from 'vitest';
import {  render, screen } from '@testing-library/react';

 const Hello = () => <span>Hello</span>

describe('Shows text', () => {
    it ("show Hello", ()=> {
      render (<Hello/>)
      const hello = screen.getByText("Hello")
      expect(hello).toBeTruthy()
    } )
});

