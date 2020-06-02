import React, { Component } from 'react';
import {Layout,ItemInfo,Item,Category,Icon} from './styledComponents';
import DelIcon from '../../../Common/icons/deleteIcon.svg';

class MealItem extends Component {
    render() {
        return (
            <Layout>
                <ItemInfo>
                    <Item>Item</Item>
                    <Category>Category</Category>
                </ItemInfo>
                <Icon src={DelIcon}/>
            </Layout>
        );
    }
}

export {MealItem};