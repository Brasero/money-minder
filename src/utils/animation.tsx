export const pageVariant = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            staggerChildren: 0.1,
        },
    },
}