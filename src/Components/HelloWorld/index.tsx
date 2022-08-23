import { useState } from 'react';
import {
    BackgroundDiv,
    BakgroundBoxDiv,
    BoxComponentDiv,
    BoxParagraphDiv
} from './styled'

interface ColorProps {
    color: string;
}
// #0e091b
// #332655
export function HelloWorld() {
    const [changeColorBackground, setChangeColorBackground] = useState(true)

    return (
        <>
            <BackgroundDiv style={{ backgroundColor: changeColorBackground ? '#0e091b' : '#2c1c53' }}>
                <BakgroundBoxDiv>
                    <BoxComponentDiv>
                        <h1
                            onClick={() => { setChangeColorBackground(!changeColorBackground) }}
                            style={{ color: changeColorBackground ? '#ffffff' : '#2fe57b' }}
                        >
                            Hello World
                        </h1>
                    </BoxComponentDiv>
                    <BoxParagraphDiv>
                        <p>
                            Click Hello World to change the background color
                        </p>
                    </BoxParagraphDiv>
                </BakgroundBoxDiv>
            </BackgroundDiv>
        </>
    );
}