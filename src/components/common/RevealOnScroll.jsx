import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function RevealOnScroll({ children, className = "" }) {
    const { elementRef, isVisible } = useScrollReveal();

    return (
        <div ref={elementRef} className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}>
            {children}
        </div>
    );
}