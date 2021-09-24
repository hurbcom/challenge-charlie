import React from 'react';
import renderer from 'react-test-renderer';

//Components
import {
    Grid1,
    Grid10,
    Grid11,Grid12,
    Grid2,
    Grid3,
    Grid4,
    Grid5,
    Grid6,
    Grid7,
    Grid8,
    Grid9,GridNumber
} from "../../../extra/components/common/grid";

test('Grid1 Component', () => {
    const component = renderer.create(
        <Grid1>
            <div id={'test'}/>
        </Grid1>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
});

test('Grid2 Component', () => {
    const component = renderer.create(
        <Grid2>
            <div id={'test'}/>
        </Grid2>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
});

test('Grid3 Component', () => {
    const component = renderer.create(
        <Grid3>
            <div id={'test'}/>
        </Grid3>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
});

test('Grid4 Component', () => {
    const component = renderer.create(
        <Grid4>
            <div id={'test'}/>
        </Grid4>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
});

test('Grid5 Component', () => {
    const component = renderer.create(
        <Grid5>
            <div id={'test'}/>
        </Grid5>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
});

test('Grid6 Component', () => {
    const component = renderer.create(
        <Grid6>
            <div id={'test'}/>
        </Grid6>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
});

test('Grid7 Component', () => {
    const component = renderer.create(
        <Grid7>
            <div id={'test'}/>
        </Grid7>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
});

test('Grid8 Component', () => {
    const component = renderer.create(
        <Grid8>
            <div id={'test'}/>
        </Grid8>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
});

test('Grid9 Component', () => {
    const component = renderer.create(
        <Grid9>
            <div id={'test'}/>
        </Grid9>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
});

test('Grid10 Component', () => {
    const component = renderer.create(
        <Grid10>
            <div id={'test'}/>
        </Grid10>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
});

test('Grid11 Component', () => {
    const component = renderer.create(
        <Grid11>
            <div id={'test'}/>
        </Grid11>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
});

test('Grid12 Component', () => {
    const component = renderer.create(
        <Grid12>
            <div id={'test'}/>
        </Grid12>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
});

test('GridNumber Component', () => {
    const component = renderer.create(
        <GridNumber number={1}>
            <div id={'test'}/>
        </GridNumber>
    );
    let tree = component.toJSON();
    //Snapshot
    expect(tree).toMatchSnapshot();
    //Value props children
    expect(tree.children[0].props.id).toEqual('test');
    //Value props children
    expect(tree.props.number).toEqual(1);
});