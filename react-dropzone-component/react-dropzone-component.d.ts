// Type definitions for react-dropzone-component
// Project: https://github.com/felixrieseberg/React-Dropzone-Component
// Definitions by: Jason Turner (Brew Software) <https://github.com/brewsoftware>
// Definitions: https://github.com/brewsoftware/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare namespace ReactDropzoneComponent {
    import React = __React;
    interface DropzoneProps {
        onDrop?: Function;
        onDropAccepted?: Function;
        onDropRejected?: Function;
        onDragEnter?: Function;
        onDragLeave?: Function;
        style?: Object;
        activeStyle?: Object;
        className?: string;
        activeClassName?: string;
        rejectClassName?: string;
        djsConfig?: Object;
        /**
        * Clicking the <Dropzone> brings up the browser file picker. To disable, set to true.
        */
        disableClick?: boolean;
        /**
        * To accept only a single file, set this to false.
        */
        multiple?: boolean;
        /**
        * Filters the file types that are valid. It should have a valid MIME type according to input element, for example:
        * application/pdf
        * image/*
        * audio/aiff,audio/midi
        */
        accept?: string;
        id?: string;
        ref?: string;
    }

    export class Dropzone extends React.Component<DropzoneProps, {}> {
    }

}

declare module "react-dropzone-component" {
    const Dropzone: typeof ReactDropzoneComponent.Dropzone;
    export = Dropzone;
}
