import * as React from 'react';

export type IComponentProp<IProps, IRef> = (props: IProps, ref: React.ForwardedRef<IRef>) => JSX.Element;
export type IComponent<IProps, IRef> = React.MemoExoticComponent<React.ForwardRefExoticComponent<React.PropsWithoutRef<IProps> & React.RefAttributes<IRef>>>;
export type IComponentFactory = <IProps, IRef = any>(componentName: string, component: IComponentProp<IProps, IRef>) => IComponent<IProps, IRef>;

const componentFactory: IComponentFactory = (componentName, ComponentBase) => {
    const Component = React.memo(React.forwardRef(ComponentBase));
    Component.displayName = componentName;
    return Component;
}

export default componentFactory;