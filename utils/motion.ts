const ease = [0.22, 1, 0.36, 1] as const;

export function slideInFromLeft(delay: number) {
    return {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.6,
                ease,
            },
        },
    };
}

export function slideInFromRight(delay: number) {
    return {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.6,
                ease,
            },
        },
    };
}

export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.6,
            ease,
        },
    },
};

export function fadeInUp(delay = 0) {
    return {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { delay, duration: 0.6, ease },
        },
    };
}
