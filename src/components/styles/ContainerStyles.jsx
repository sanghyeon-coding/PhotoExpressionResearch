import styled from '@emotion/styled';

export const Wrap = styled.div`
    position: relative;
`;

export const VideoFile = styled.div`
    background-color: #000;
    position: absolute;
    z-index: -1;
`;

export const TestCapture = styled.div`
    background-color: #000;
    position: absolute;

    -ms-overflow-style: none;
    .canvas::-webkit-scrollbar {
        display: none;
    }
`;


