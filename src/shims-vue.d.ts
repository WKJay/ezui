declare module '*.vue' {
    import { ComponentOptions } from "vue";
    const componentOptions: ComponentOptions<any, any, any, any, any>;
    export default componentOptions;
}

declare module '*.md' {
    const str: string;
    export default str;
}