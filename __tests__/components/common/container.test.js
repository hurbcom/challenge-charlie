import React from 'react';
import renderer from 'react-test-renderer';

//Components
import {Container} from "../../../extra/components/common/container";

test('Container Component', () => {
    const component = renderer.create(
        <Container>
            <div id={'test'}/>
        </Container>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');

});