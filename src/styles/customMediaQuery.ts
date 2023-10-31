const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

export const media = {
    desktop: customMediaQuery(992),
    tablet: customMediaQuery(835),
    mobile: customMediaQuery(576),
};
