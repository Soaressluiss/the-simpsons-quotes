type overflowTypes = "visible" | "scroll" | "hidden" | "auto";

export const manipulationScroll = (overflowStyle: overflowTypes = "auto") => {
    document.body.style.overflow = overflowStyle;
};
