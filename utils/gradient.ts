export const generateGradient = (colors: string[], angle: number = 45) => {
    return `linear-gradient(${angle}deg, ${colors.join(', ')})`;
};

export const gradients = {
    primary: ['#FF6B6B', '#FFB88C'],
    secondary: ['#4A00E0', '#8E2DE2'],
    dark: ['#2C3E50', '#000000'],
};

export const pulsingGradient = (colors: string[]) => {
    const keyframes = colors
        .map((color, index) => {
            const percentage = (index / (colors.length - 1)) * 100;
            return `${percentage}% { background-position: ${percentage}% 50% }`;
        })
        .join('\n');

    return `
      @keyframes gradientAnimation {
        ${keyframes}
      }
    `;
};
