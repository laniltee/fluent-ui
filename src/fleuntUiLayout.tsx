import React from 'react';
import {
    Stack,
    Text,
    Link,
    FontWeights,
    IStackTokens,
    loadTheme,
    Layer,
    PivotItem,
    IStyleSet, ILabelStyles, Pivot, initializeIcons
} from '@fluentui/react';
import './styles/fluentUi.css';
import myTheme from './styles/theme.js'
import NavCustomGroupHeadersExample from "./components/leftNavigation";
import CommandBarBasicExample from "./components/commandBar";

loadTheme(myTheme);
initializeIcons();

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: {marginTop: 10},
};

const FluentUiLayout: React.FunctionComponent = () => {
    return (
        <div>
            <div className="header">
            </div>
            <div className="main">
                <div className="left-nav">
                    <NavCustomGroupHeadersExample/>
                </div>
                <div className="right-content">
                    <CommandBarBasicExample />
                    <div>
                        Other content
                    </div>
                </div>
            </div>
            <div className="footer">
                <CommandBarBasicExample />
            </div>
        </div>
    );
};

export default FluentUiLayout;
