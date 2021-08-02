export const heavyProcess = (iterations) => {
    for (let index = 0; index < iterations; index++) {
       console.log('get back!'); 
    };
    return `${iterations} iteraciones hechas!`;
}