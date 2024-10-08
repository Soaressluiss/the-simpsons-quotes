const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

export const media = {
    desktop: customMediaQuery(992),
    tablet: customMediaQuery(768),
    mobile: customMediaQuery(440),
};
