import React from 'react';
import{screen,render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

//testSuite

describe("Hero Component",()=>
{
    test("renders Hero img",()=>
    {
        render(<Hero />);
        const img=screen.getByAltText("HeroImage");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src","media/images/homeHero.png");
    });
    test("renders signup button",()=>
    {
        render(<Hero />);
        const btn=screen.getByRole("button");
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveClass("btn-primary");
    })
})
