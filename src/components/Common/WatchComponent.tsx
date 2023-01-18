import React, {useEffect, useLayoutEffect, useRef} from 'react';
// @ts-ignore
import Watch from '!svg-react-loader?name=Watch!../../assets/watch.svg';

const WatchComponent = () => {
    const svgRef =  useRef<SVGSVGElement>(null);
    const cycleRef =  useRef<SVGCircleElement>(null);
    const hourRef =  useRef<SVGLineElement>(null);
    const minuteRef =  useRef<SVGLineElement>(null);
    const secondRef =  useRef<SVGLineElement>(null);


    useEffect(() => {
        for(let i = 1; i <= 12; i++) {
            let el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            el.setAttribute('x1', '100');
            el.setAttribute('y1', '30');
            el.setAttribute('x2', '100');
            el.setAttribute('y2', '40');
            el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
            el.setAttribute('style', 'stroke: #55E6C1;');
            svgRef.current.appendChild(el);
        }
    },[])
    useLayoutEffect(() => {
        animate();
    });
    const animate = () => {
        const hands = [];
        hands.push(hourRef);
        hands.push(minuteRef);
        hands.push(secondRef);

        const cx = 100;
        const cy = 100;

        function shifter(val) {
            return [val, cx, cy].join(' ');
        }

        const date = new Date();
        const hoursAngle = 360 * (date.getHours() / 12) + date.getMinutes() / 2;
        console.log(hoursAngle);
        const minuteAngle = 360 * date.getMinutes() / 60;
        const secAngle = 360 * date.getSeconds() / 60;

        hands[2].current.firstChild.setAttribute('from', shifter(secAngle));
        hands[2].current.firstChild.setAttribute('to', shifter(secAngle + 360));
        hands[1].current.firstChild.setAttribute('from', shifter(minuteAngle));
        hands[1].current.firstChild.setAttribute('to', shifter(minuteAngle + 360));
        hands[0].current.firstChild.setAttribute('from', shifter(hoursAngle));
        console.log(shifter(hoursAngle));
        hands[0].current.firstChild.setAttribute('to', shifter(hoursAngle + 360));
        console.log(shifter(hoursAngle + 360));
    }
    return (
        <svg style={{ marginLeft: 'auto', marginRight: 'auto', height: '19vh', padding: '5px'}} ref={svgRef} viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
                <feOffset in="blur" dx="2.5" dy="2.5"/>
            </filter>
            <g>
                <circle ref={cycleRef} id="shadow" style={{fill: '#1e272e'}} cx="100" cy="100" r="87" filter="url(#innerShadow)"/>
                <circle id="circle" style={{stroke: '#FFF', strokeWidth: '12px', fill: '#2C3A47'}} cx="100" cy="100" r="80"/>
            </g>
            <g>
                <line ref={ hourRef } x1="100" y1="100" x2="100" y2="55" style={{ strokeWidth: '3px', stroke: '#55E6C1' }} id="hourhand">
                    <animateTransform attributeName="transform"
                                      attributeType="XML"
                                      type="rotate"
                                      dur="43200s"
                                      repeatCount="indefinite"/>
                </line>
                <line ref={ minuteRef } x1="100" y1="100" x2="100" y2="40" style={{ strokeWidth: '4px', stroke: '#55E6C1' }} id="minutehand">
                    <animateTransform attributeName="transform"
                                      attributeType="XML"
                                      type="rotate"
                                      dur="3600s"
                                      repeatCount="indefinite"/>
                </line>
                <line ref={ secondRef } x1="100" y1="100" x2="100" y2="30" style={{ strokeWidth: '2px', stroke: '#58B19F' }} id="secondhand">
                    <animateTransform attributeName="transform"
                                      attributeType="XML"
                                      type="rotate"
                                      dur="60s"
                                      repeatCount="indefinite"/>
                </line>
            </g>
            <circle id="center" style={{fill: '#128A86', stroke: '#C1EFED', strokeWidth: '2px'}} cx="100" cy="100" r="3"/>
        </svg>
    );
}

export default WatchComponent;

