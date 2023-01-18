import React, { useRef, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
    filter: url(#threshold) blur(0.6px);
    margin: auto;
`;
const Emoji = styled.div`
    font-size: xxx-large;
`;
const MorphComponent = () => {

    const [renderEmoji, setRenderEmoji] = useState(false);
    const inputElement2 = useRef<HTMLDivElement>(null);
    const texts = [
        "This",
        "Website",
        "Uses",
        "HTML",
        "CSS",
        "JS",
        "React",
        "TypeScript",
        "Webpack",
        "SVG",
        "And More."
    ];
    useLayoutEffect(() => {
        if (!renderEmoji) {
            inputElement2.current.textContent = texts[(textIndex + 1) % texts.length];
            animate();
        }
    })

    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    function doMorph() {
        morph -= cooldown;
        cooldown = 0;

        let fraction = morph / morphTime;

        if (fraction > 1) {
            cooldown = cooldownTime;
            fraction = 1;
        }

        setMorph(fraction);
    }

    function setMorph(fraction) {
        //inputElement1.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        inputElement2.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        //inputElement1.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        //inputElement1.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        //inputElement1.current.textContent = texts[textIndex % texts.length];
        inputElement2.current.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
        morph = 0;

        inputElement2.current.style.filter = "";
        inputElement2.current.style.opacity = "100%";

        //inputElement1.current.style.filter = "";
        //inputElement1.current.style.opacity = "0%";
    }

    function animate() {
        const id = requestAnimationFrame(animate);

        let newTime: Date = new Date();
        let shouldIncrementIndex = cooldown > 0;
        // @ts-ignore
        let dt: any = (newTime - time) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
            setRenderEmoji(false);
            if (shouldIncrementIndex ) {
                textIndex++;
            }
            if (textIndex < ((texts.length * 2) - 1)) {
                doMorph();
            } else {
                cancelAnimationFrame(id);
                setRenderEmoji(true);
            }
        } else {
            doCooldown();
        }
    }
    if (renderEmoji) {
        return (
            <Emoji>&#129409;</Emoji>
        )
    }
    return (
        <>
        <SkillsContainer>
            {/*<div style={{*/}
            {/*    fontFamily: 'PT Serif',*/}
            {/*    color: '#1b1b1b',*/}
            {/*    fontSize: '39px',*/}
            {/*    letterSpacing: '0px',*/}
            {/*    lineHeight: '25px',*/}
            {/*    fontWeight: '700'*/}
            {/*}} ref={inputElement1} id="text1"/>*/}
            <div style={{
                fontFamily: 'PT Serif',
                color: '#1b1b1b',
                fontSize: '39px',
                letterSpacing: '0px',
                lineHeight: '25px',
                fontWeight: '700'
            }} ref={inputElement2} id="text2" />
        </SkillsContainer>
        </>
    );
}

export default MorphComponent;
