import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import { media } from "../../styles/customMediaQuery";

export const DialogOverlay = styled(Dialog.Overlay)`
    background-color: #333333;
    opacity: 0.5;
    position: fixed;
    inset: 0;
`;

export const DialogContent = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 416px;
    display: grid;
    place-items: center;
    z-index: 2;
    &:focus {
        outline: none;
    }
    ${media.tablet} {
        max-width: initial;
    }
    ${media.mobile} {
        flex-direction: column;
        border-radius: 1rem;
        width: 80%;
    }
`;
