import React from 'react';
import './SubCategoryRow.css';

class SubCategoryRow extends React.Component {
    render() {
        const subCategoryRows = Object.keys(this.props.subCategory).map((objectKey, index) => {
            return (
                <td className={'subCategoryRow__cell subCategoryRow__cell--col-' + (index + 1)} key={index}>{this.props.subCategory[objectKey]}</td>
            );
        });

        return (
            <tr className='SubCategoryRow'>
                {subCategoryRows}
            </tr>
        );
    }
}

export default SubCategoryRow;