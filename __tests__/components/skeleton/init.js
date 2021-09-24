import React from 'react';
import renderer from 'react-test-renderer';

//Components
import {SkeletonInit} from "../../../extra/components/skeleton/init";

test('SkeletonInit Component', () => {
    const component = renderer.create(
        <SkeletonInit/>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();

});