export const fadeIn = (directions, delay) => {
    return {
        hidden: {
            y: directions === 'up' ? 80 : directions === 'down' ? -80 : 0,
            opacity: 0,
            x: directions === 'left' ? 80 : directions === 'right' ? -80 : 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duaration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}