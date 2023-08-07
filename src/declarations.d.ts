declare module '*.png' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.svg' {
  const value: string
  export default value
}

declare namespace NodeJS {
  interface Require {
    context: {
      (path: string, recursive: boolean, regExp: RegExp): {
        keys: () => string[];
        <T>(id: string): T;
      };
    };
  }
}