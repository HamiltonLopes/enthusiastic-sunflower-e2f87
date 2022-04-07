import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action, Badge } from '../../atoms';

export default function BannerSection(props) {
    
    return (<div {...getDataAttrs(props)}> <p data-sb-field-path=".title">{props.title}</p></div>
    
    );
}
