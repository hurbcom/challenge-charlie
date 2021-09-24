import React from 'react';
import renderer from 'react-test-renderer';

//Components
import { TypographyCustom } from "../../../extra/components/common/typography";

test('Typography Component', () => {
    const componentSimple = renderer.create(
        <TypographyCustom align={'center'}>
            Test
        </TypographyCustom>
    );
    let treeSimple = componentSimple.toJSON();
    expect(treeSimple.children[0]).toEqual('Test');
});

test('Typography Component Align', () => {
    const componentAlign = renderer.create(
        <TypographyCustom align={'center'}/>
    );
    let treeAlign = componentAlign.toJSON();
    expect(treeAlign.props.className).toEqual('MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter');

});