///<reference path="./react/react.d.ts"/>
declare module 'react-loader' {
    import React = require("react");

    // Form component
    var Loader: LoaderClass;

    interface Loader extends React.ReactElement<LoaderProps> {
    }

    interface LoaderClass extends React.ComponentClass<LoaderProps> {
    }

    interface LoaderProps extends React.Props<LoaderClass> {

        loaded: boolean;
        lines?: number;
        length?: number;
        width?: number;
        radius?: number;
        
        corners?: number;
        rotate?: number;
        direction?: number;
        color?: string;
        speed?: number;
        trail?: number;
        shadow?: boolean;
        hwaccel?: boolean;
        className?: string;
        zIndex?: number;
        top?: string;
        left?: string;
        scale?: number;
        options?: any;   
    }
}